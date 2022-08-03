import {v1} from "uuid";

const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE_TO_POST = 'ADD-LIKE-TO-POST';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export type profileInfoType = {
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
    profileInfo: profileInfoType
    posts: postsType
    newPostText: string
}

export type dialogueType = {
    id: string
    name: string
}
type dialoguesDataType = Array<dialogueType>
export type messageType = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
}
export type messagesDataType = Array<messageType>
export type dialoguesPageType = {
    dialoguesData: dialoguesDataType
    messagesData: messagesDataType
    newMessageText: string
}

export type friendType = {
    id: string
    avatar: string
    name: string
    backgroundColor: string
}
export type friendsPageType = Array<friendType>
export type stateType = {
    profilePage: profilePageType
    dialoguesPage: dialoguesPageType
    friendsPage: friendsPageType
}

export type actionType = ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addLikeToPostAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof addMessageAC>

type storeType = {
    _state: stateType

    _renderApp: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void

    getState: () => stateType

    _changeNewPostText: (textData: string) => void
    _addPost: () => void
    _addLikeToPost: (id: string) => void

    _changeNewMessageText: (messageData: string) => void
    _addMessage: () => void

    dispatch: (action: actionType) => void
};


export const changeNewPostTextAC = (textData: string) => {
    return {type: CHANGE_NEW_POST_TEXT, textData: textData} as const
};
export const addPostAC = () => {
    return {type: ADD_POST} as const
};
export const addLikeToPostAC = (id: string) => {
    return {type: ADD_LIKE_TO_POST, id: id} as const
};
export const changeNewMessageTextAC = (messageData: string) => {
    return {type: CHANGE_NEW_MESSAGE_TEXT, messageData: messageData} as const
};
export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const
};


export const store: storeType = {
    _state: {
        profilePage: {
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
        },
        dialoguesPage: {
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
            newMessageText: ''
        },
        friendsPage: [
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
        ]
    },

    _renderApp(state) {    },
    subscribe(observer) {
        this._renderApp = observer
    },
    getState() {
        return this._state
    },
    _changeNewPostText(textData) {
        this._state.profilePage.newPostText = textData;
        this._renderApp(this._state);
    },
    _addPost() {
        if (this._state.profilePage.newPostText.trim()) {
            this._state.profilePage.posts.push({
                id: v1(),
                avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
                text: this._state.profilePage.newPostText.trim(),
                date: 'June 22, 2022',
                numOfLikes: 0
            });
            this._state.profilePage.newPostText = '';
            this._renderApp(this._state);
        }
    },
    _addLikeToPost(id) {
        this._state.profilePage.posts = this._state.profilePage.posts.map(el => {
            return (
                el.id === id ? {...el, numOfLikes: el.numOfLikes + 1} : el
            )
        });
        this._renderApp(this._state);
    },
    _changeNewMessageText(messageData) {
        this._state.dialoguesPage.newMessageText = messageData;
        this._renderApp(this._state);
    },
    _addMessage() {
        if (this._state.dialoguesPage.newMessageText.trim()) {
            this._state.dialoguesPage.messagesData.push({
                id: v1(), avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
                name: 'Alex',
                message: this._state.dialoguesPage.newMessageText,
                time: '22:05'
            });
            this._state.dialoguesPage.newMessageText = '';
            this._renderApp(this._state);
        }
    },

    dispatch(action) {
        if (action.type === CHANGE_NEW_POST_TEXT) {
            this._changeNewPostText(action.textData);
        } else if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === ADD_LIKE_TO_POST) {
            this._addLikeToPost(action.id);
        } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
            this._changeNewMessageText(action.messageData);
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage();
        }                               // before add to dispatch - add type in ~actionType~ and name of ~const~? then add ~actionCreator~
    }
};
