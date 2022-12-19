import {v1} from "uuid";

export type FriendReducerActionType = ReturnType<typeof addFriendAC>

export type friendType = {
    id: string
    avatar: string
    name: string
    backgroundColor: string
}
export type friendsPageType = Array<friendType>

const ADD_FRIEND = 'ADD-FRIEND';

const initializeState = [
    {
        id: v1(),
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Marry',
        backgroundColor: 'orangered'
    },
    {
        id: v1(),
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Andrey',
        backgroundColor: 'royalblue'
    },
    {
        id: v1(),
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Olga',
        backgroundColor: 'orangered'
    },
    {
        id: v1(),
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Nick',
        backgroundColor: 'orangered'
    }
];

const friendsReducer = (state: friendsPageType = initializeState, action: FriendReducerActionType) => {
    return state;
}

export const addFriendAC = () => {
    return {type: ADD_FRIEND}
}

export default friendsReducer;