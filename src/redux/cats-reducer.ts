export type catsReducerActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setCatsAC>
    | ReturnType<typeof setTotalPageAC>
    | ReturnType<typeof setCurrentPageAC>

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
}

export const initializeState: CatsPageType = {
    cats: [],
    currentPage: 1,
    catsOnPage: 5,
    totalPage: 0,
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CATS = 'SET-CATS';
const SET_TOTAL_PAGE = 'SET-TOTAL-PAGE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

export const catsReducer = (state: CatsPageType = initializeState, action: catsReducerActionType): CatsPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                cats: state.cats.map(el => el.id === action.payload.catsId ? {...el, followed: true} : el)
            };
        }
        case "UNFOLLOW": {
            return {
                ...state,
                cats: state.cats.map(el => el.id === action.payload.catsId ? {...el, followed: false} : el)
            }
        }
        case "SET-CATS": {
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
        default:
            return state
    }
}

export const followAC = (catsId: number) => {
    return {
        type: FOLLOW,
        payload: {
            catsId
        }
    } as const
};
export const unfollowAC = (catsId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            catsId
        }
    } as const
};
export const setCatsAC = (catsToSet: CatsType) => {
    return {
        type: SET_CATS,
        payload: {catsToSet}
    } as const
};
export const setTotalPageAC = (totalPage: number) => {
    return {
        type: SET_TOTAL_PAGE,
        payload: {totalPage}
    } as const;
};
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const
};

export default catsReducer;