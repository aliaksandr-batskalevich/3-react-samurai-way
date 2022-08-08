import {actionType, profilePageType} from "./state";
import {v1} from "uuid";
import {getDate} from "./unitedFn";

const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE_TO_POST = 'ADD-LIKE-TO-POST';

const profileReducer = (state: profilePageType, action: actionType) => {
    switch (action.type) {
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.textData;
            return state;
        case ADD_POST:
            if (state.newPostText.trim()) {
                state.posts.push({
                    id: v1(),
                    avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
                    text: state.newPostText.trim(),
                    date: getDate(),
                    numOfLikes: 0
                });
                state.newPostText = '';
            }
            return state;
        case ADD_LIKE_TO_POST:
            state.posts = state.posts.map(el => el.id === action.id ? {...el, numOfLikes: el.numOfLikes + 1} : el);
            return state;
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