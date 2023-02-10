import {DispatchThunkType} from "./redux-store";
import {usersApi} from "../api/api";

export type CatsReducerActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setCats>
    | ReturnType<typeof setTotalPage>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setFollowing>

export type catsReducerThunkType = ReturnType<typeof getUsersTC> | ReturnType<typeof setCurrentPageTC> | ReturnType<typeof followTC> | ReturnType<typeof unfollowTC>

export type CatType = {
    id: number
    name: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}
export type CatsType = Array<CatType>
export type CatsPageType = {
    cats: CatsType
    currentPage: number
    catsOnPage: number
    totalPage: number
    toggleIsFetching: boolean
    followingInProgress: Array<number>
}
export type PaginatorDataType = Pick<CatsPageType, 'currentPage' | 'totalPage' | 'catsOnPage'>;

export const initializeState: CatsPageType = {
    cats: [],
    currentPage: 1,
    catsOnPage: 5,
    totalPage: 0,
    toggleIsFetching: true,
    followingInProgress: [],
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CATS = 'SET-CATS';
const SET_TOTAL_PAGE = 'SET-TOTAL-PAGE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING = 'FOLLOWING';

export const catsReducer = (state: CatsPageType = initializeState, action: CatsReducerActionType): CatsPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                cats: state.cats.map(el => el.id === action.payload.catsId ? {...el, followed: true} : el)
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                cats: state.cats.map(el => el.id === action.payload.catsId ? {...el, followed: false} : el)
            }
        }
        case SET_CATS: {
            return {
                ...state,
                cats: action.payload.catsToSet
            }
        }
        case SET_TOTAL_PAGE:
            return {
                ...state,
                ...action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                ...action.payload
            }
        case FOLLOWING: {
            let newFollowingArray = action.payload.isFollowing
                ? [...state.followingInProgress, action.payload.id]
                : state.followingInProgress.filter(el => el !== action.payload.id)
            return {...state, followingInProgress: newFollowingArray}
        }
        default:
            return state
    }
}

export const follow = (catsId: number) => {
    return {
        type: FOLLOW,
        payload: {
            catsId
        }
    } as const
};
export const unfollow = (catsId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            catsId
        }
    } as const
};
export const setCats = (catsToSet: CatsType) => {
    return {
        type: SET_CATS,
        payload: {catsToSet}
    } as const
};
export const setTotalPage = (totalPage: number) => {
    return {
        type: SET_TOTAL_PAGE,
        payload: {totalPage}
    } as const;
};
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const
};
export const setToggleIsFetching = (toggleIsFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {toggleIsFetching}
    } as const;
};
export const setFollowing = (id: number, isFollowing: boolean) => {
    return (
        {type: FOLLOWING, payload: {id, isFollowing}}
    ) as const
}

export const getUsersTC = (currentPage: number, catsOnPage: number) => (dispatch: DispatchThunkType) => {
    usersApi.getUsers(currentPage, catsOnPage).then(response => {
        dispatch(setCats(response.items));
        dispatch(setTotalPage(Math.ceil(response.totalCount / catsOnPage)));
        dispatch(setToggleIsFetching(false));
    });
}

export const setCurrentPageTC = (currentPage: number, catsOnPage: number) => (dispatch: DispatchThunkType) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setToggleIsFetching(true));
    usersApi.getUsers(currentPage, catsOnPage)
        .then(response => {
            dispatch(setCats(response.items));
            dispatch(setToggleIsFetching(false));
        });
};

export const followTC = (id: number) => (dispatch: DispatchThunkType) => {
    dispatch(setFollowing(id, true));
    usersApi.followUser(id)
        .then(response => {
        if (response === 0) {
            dispatch(follow(id));
        }
        dispatch(setFollowing(id, false));
    });
};

export const unfollowTC = (id: number) => (dispatch: DispatchThunkType) => {
    dispatch(setFollowing(id, true));
    usersApi.unfollowUser(id)
        .then(response => {
            if (response === 0) {
                dispatch(unfollow(id));
            }
            dispatch(setFollowing(id, false));
        });
};

export default catsReducer;