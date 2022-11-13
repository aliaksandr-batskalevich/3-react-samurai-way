import {v1} from "uuid";
import {getDate} from "./unitedFn";
import {profileApi} from "../api/api";
import {DispatchThunkType} from "./redux-store";

export type profileReducerActionType = ReturnType<typeof changeNewPostText>
    | ReturnType<typeof addPost>
    | ReturnType<typeof addLikeToPost>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setProfileInfo>
    | ReturnType<typeof updateProfileStatus>


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
export type ProfileInfoType = {
    userId: null | number
    fullName: null | string
    photos: PhotosType
    aboutMe: null | string
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
    newPostText: string
    toggleIsFetching: boolean
}

const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_TOGGLE_IS_FETCHING = 'SET-TOGGLE-IS-FETCHING';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE_TO_POST = 'ADD-LIKE-TO-POST';
const CHANGE_PROFILE_STATUS = 'CHANGE_PROFILE_STATUS';

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
    newPostText: '',
    toggleIsFetching: true,
};

const profileReducer = (state: ProfilePageType = initializeState, action: profileReducerActionType) => {
    switch (action.type) {
        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.textData};
        case ADD_POST:
            if (state.newPostText.trim()) {
                let newPost = {
                    id: v1(),
                    avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
                    text: state.newPostText.trim(),
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
        case CHANGE_PROFILE_STATUS:
            return {...state, profileInfo: {...state.profileInfo, ...action.payload}}
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
export const changeNewPostText = (textData: string) => {
    return {type: CHANGE_NEW_POST_TEXT, textData: textData} as const
};
export const addPost = () => {
    return {type: ADD_POST} as const
};
export const addLikeToPost = (id: string) => {
    return {type: ADD_LIKE_TO_POST, id: id} as const
};
export const updateProfileStatus = (aboutMe: string) => {
    return {
        type: CHANGE_PROFILE_STATUS,
        payload: {aboutMe}
    } as const;
};

export const getProfileTC = (id: number) => (dispatch: DispatchThunkType) => {
    dispatch(setToggleIsFetching(true));
    profileApi.getProfile(id)
        .then(response => {
            dispatch(setProfileInfo(response));
            dispatch(setToggleIsFetching(false));
        });
};
export const getStatusTC = (id: number) => (dispatch: DispatchThunkType) => {
    profileApi.getStatus(id)
        .then(response => {
        dispatch(updateProfileStatus(response));
    })
};

export const updateStatusTC = (newStatus: string) => (dispatch: DispatchThunkType) => {
    profileApi.updateStatus(newStatus)
        .then(response => {
            dispatch(updateProfileStatus(newStatus));
    })
}

export default profileReducer