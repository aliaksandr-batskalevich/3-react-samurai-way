import {v1} from "uuid";
import {getTime} from "./unitedFn";

export type dialogueType = {
    id: string
    name: string
}
export type dialoguesDataType = Array<dialogueType>
export type messageType = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
}
export type messagesDataType = Array<messageType>
export type DialoguesPageType = {
    dialoguesData: dialoguesDataType
    messagesData: messagesDataType
}

export type DialoguesReducerActionType = ReturnType<typeof addMessageAC>

const ADD_MESSAGE = 'ADD-MESSAGE';

const initializeState: DialoguesPageType = {
    dialoguesData: [
        {id: v1(), name: 'Marry'},
        {id: v1(), name: 'Andrej'},
        {id: v1(), name: 'Olga'}
    ],
    messagesData: [
        {
            id: 'gcs;',
            avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
            name: 'Marry',
            message: 'Hello, I am Marry!',
            time: '22:00'
        },
        {
            id: 'gc;',
            avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
            name: 'Alex',
            message: 'Hi, I am Alex!',
            time: '22:05'
        },
        {
            id: 'gs;',
            avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
            name: 'Alex',
            message: 'Where are you?',
            time: '22:06'
        },
    ],
};

const dialoguesReducer = (state: DialoguesPageType = initializeState, action: DialoguesReducerActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.payload.newMessageText && action.payload.newMessageText.trim()) {
                let newMessage = {
                    id: v1(), avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
                    name: 'Alex',
                    message: action.payload.newMessageText.trim(),
                    time: getTime()
                };
                return {...state, messagesData: [...state.messagesData, newMessage]};
            }
            return state;
        default:
            return state;
    }
}

export const addMessageAC = (newMessageText: string) => {
    return {type: ADD_MESSAGE, payload: {newMessageText}} as const
};

export default dialoguesReducer;