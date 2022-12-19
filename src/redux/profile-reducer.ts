import {v1} from "uuid";
import {getDate} from "./unitedFn";
import {profileApi} from "../api/api";
import {DispatchThunkType} from "./redux-store";

export type ProfileReducerActionType = ReturnType<typeof addPost>
    | ReturnType<typeof addLikeToPost>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setProfileInfo>
    | ReturnType<typeof updateProfileStatus>
    | ReturnType<typeof setStatusIsLoading>


type PhotosType = {
    small: null | string
    large: null | string
}
type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type AboutMeType = {
    isLoading: boolean
    status: string
}
export type ProfileInfoType = {
    userId: null | number
    fullName: null | string
    photos: PhotosType
    aboutMe: null | AboutMeType
    lookingForAJobDescription: null | boolean
    lookingForAJob: null | string
    contacts: ContactsType
}
export type postType = {
    id: string
    avatar: string
    text: string
    date: string
    numOfLikes: number
}
export type postsType = Array<postType>
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    posts: postsType
    toggleIsFetching: boolean
}

const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_TOGGLE_IS_FETCHING = 'SET-TOGGLE-IS-FETCHING';
const ADD_POST = 'ADD-POST';
const ADD_LIKE_TO_POST = 'ADD-LIKE-TO-POST';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const SET_STATUS_IS_LOADING = 'SET_STATUS_IS_LOADING';

// export const aboutMe: ProfileInfoType = {
//     userId: 9999999,
//     fullName: 'Aliaksandr Batskalevich',
//     photos: {
//         small: myAvatarSmall,
//         large: myAvatarLarge
//     },
//     aboutMe: 'Happy boy',
//     lookingForAJobDescription: true,
//     lookingForAJob: 'javascript, react, redux',
//     contacts: {
//         facebook: null,
//         website: null,
//         vk: 'https://vk.com/aliaksandr.batskalevich',
//         twitter: null,
//         instagram: null,
//         youtube: null,
//         github: 'https://github.com/aliaksandr-batskalevich',
//         mainLink: null,
//     },
// }

export const initializeState: ProfilePageType = {
    profileInfo: {
        userId: null,
        fullName: null,
        photos: {
            small: null,
            large: null
        },
        aboutMe: null,
        lookingForAJobDescription: null,
        lookingForAJob: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
    },
    posts: [
        {
            id: v1(),
            avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
            text: 'Hello! I am Alex!',
            date: 'June 16, 2022',
            numOfLikes: 0
        },
        {
            id: v1(),
            avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
            text: 'It is my firs post!',
            date: 'June 22, 2022',
            numOfLikes: 10
        },
        {
            id: v1(),
            avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
            text: 'And second! :)',
            date: 'June 30, 2022',
            numOfLikes: 12
        }
    ],
    toggleIsFetching: true,
};

const profileReducer = (state: ProfilePageType = initializeState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case ADD_POST:
            if (action.payload.newPostText && action.payload.newPostText.trim()) {
                let newPost = {
                    id: v1(),
                    avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
                    text: action.payload.newPostText.trim(),
                    date: getDate(),
                    numOfLikes: 0
                };
                return {...state, newPostText: '', posts: [...state.posts, newPost]};
            }
            return state;
        case ADD_LIKE_TO_POST:
            return {
                ...state,
                posts: state.posts.map(el => el.id === action.id ? {...el, numOfLikes: el.numOfLikes + 1} : el)
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
                ...action.payload
            }
        case SET_TOGGLE_IS_FETCHING:
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_PROFILE_STATUS:
            return {
                ...state,
                profileInfo: {...state.profileInfo, aboutMe: {...state.profileInfo.aboutMe, ...action.payload}}
            }
        case SET_STATUS_IS_LOADING:
            return {
                ...state,
                profileInfo: {...state.profileInfo, aboutMe: {...state.profileInfo.aboutMe, ...action.payload}}
            }
        default:
            return state;
    }
}

export const setProfileInfo = (profileInfo: ProfileInfoType) => {
    return {
        type: SET_PROFILE_INFO,
        payload: {profileInfo}
    } as const;
};
export const setToggleIsFetching = (toggleIsFetching: boolean) => {
    return {
        type: SET_TOGGLE_IS_FETCHING,
        payload: {toggleIsFetching}
    } as const;
};
export const addPost = (newPostText: string) => {
    return {type: ADD_POST, payload: {newPostText}} as const
};
export const addLikeToPost = (id: string) => {
    return {type: ADD_LIKE_TO_POST, id: id} as const
};
export const updateProfileStatus = (status: string) => {
    return {
        type: UPDATE_PROFILE_STATUS,
        payload: {status}
    } as const;
};
const setStatusIsLoading = (isLoading: boolean) => {
    return {
        type: SET_STATUS_IS_LOADING,
        payload: {isLoading},
    } as const;
};

export const getProfileTC = (id: number) => (dispatch: DispatchThunkType) => {
    dispatch(setToggleIsFetching(true));
    profileApi.getProfile(id)
        .then(response => {
            dispatch(setProfileInfo(response));
            dispatch(setToggleIsFetching(false));
            dispatch(setStatusIsLoading(true));
            return profileApi.getStatus(id)
        })
        .then(response => {
            dispatch(updateProfileStatus(response));
            dispatch(setStatusIsLoading(false));
        });
};
// export const getStatusTC = (id: number) => (dispatch: DispatchThunkType) => {
//     setTimeout(() => {
//         profileApi.getStatus(id)
//             .then(response => {
//                 dispatch(updateProfileStatus(response));
//                 dispatch(setStatusIsLoading(false));
//             })
//     }, 500);
// };
export const updateStatusTC = (newStatus: string) => (dispatch: DispatchThunkType) => {
    dispatch(setStatusIsLoading(true));
    profileApi.updateStatus(newStatus)
        .then(response => {
            dispatch(updateProfileStatus(newStatus));
            dispatch(setStatusIsLoading(false));
        })
}

export default profileReducer