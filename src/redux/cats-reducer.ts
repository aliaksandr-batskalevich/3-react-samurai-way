export type catsReducerActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setCatsAC>

type AddressType = {
    country: string
    city: string
}
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
}

export const initializeState: CatsPageType = {
    cats: []
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CATS = 'SET-CATS';

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
                cats: [...state.cats, ...action.payload.catsToSet]
            }
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
}

export default catsReducer;