import {v1} from "uuid";
import {getDate} from "./unitedFn";

export type profileReducerActionType = ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addLikeToPostAC>

export type ProfileInfoType = {
    avatarImg: string
    firstName: string
    lastName: string
    birthday: string
    city: string
}
export type postType = {
    id: string
    avatar: string
    text: string
    date: string
    numOfLikes: number
}
export type postsType = Array<postType>
export type profilePageType = {
    profileInfo: ProfileInfoType
    posts: postsType
    newPostText: string
}

const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE_TO_POST = 'ADD-LIKE-TO-POST';

const initializeState: profilePageType = {
    profileInfo: {
        avatarImg: 'https://99px.ru/sstorage/56/2012/12/mid_76508_1420.jpg',
        firstName: 'Aliaksandr',
        lastName: 'Batskalevich',
        birthday: 'September 16, 1988',
        city: 'Brest'
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
    newPostText: ''
};

const profileReducer = (state: profilePageType = initializeState, action: profileReducerActionType) => {
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
            return {...state, posts: state.posts.map(el => el.id === action.id ? {...el, numOfLikes: el.numOfLikes + 1} : el)};
        default:
            return state;
    }
}

export const changeNewPostTextAC = (textData: string) => {
    return {type: CHANGE_NEW_POST_TEXT, textData: textData} as const
};
export const addPostAC = () => {
    return {type: ADD_POST} as const
};
export const addLikeToPostAC = (id: string) => {
    return {type: ADD_LIKE_TO_POST, id: id} as const
};

export default profileReducer