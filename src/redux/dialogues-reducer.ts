import {v1} from "uuid";
import {actionType, dialoguesPageType} from "./state";
import {getTime} from "./unitedFn";

const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const changeNewMessageTextAC = (messageData: string) => {
    return {type: CHANGE_NEW_MESSAGE_TEXT, messageData: messageData} as const
};
export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const
};

const dialoguesReducer = (state: dialoguesPageType, action: actionType) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageData;
            return state;
        case ADD_MESSAGE:
            if (state.newMessageText.trim()) {
                state.messagesData.push({
                    id: v1(), avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
                    name: 'Alex',
                    message: state.newMessageText,
                    time: getTime()
                });
                state.newMessageText = '';
            }
            return state;
        default:
            return state
    }
}

export default dialoguesReducer;