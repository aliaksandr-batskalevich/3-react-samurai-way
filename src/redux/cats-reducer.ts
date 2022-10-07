export type catsReducerActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setCats>
    | ReturnType<typeof setTotalPage>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setFollowing>

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

export const catsReducer = (state: CatsPageType = initializeState, action: catsReducerActionType): CatsPageType => {
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

export default catsReducer;