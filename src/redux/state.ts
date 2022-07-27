import {v1} from "uuid";

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
    changeNewPostText: (textData: string) => void
    addPost: () => void
    addLikeToPost: (id: string) => void
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
    changeNewMessageText: (messageData: string) => void
    addMessage: () => void
}

export type friendType = {
    id: string
    avatar: string
    name: string
    backgroundColor: string
}
export type friendsPageType = Array<friendType>

export type appDataType = {
    profilePage: profilePageType
    dialoguesPage: dialoguesPageType
    friendsPage: friendsPageType
}

let renderAppHandler = (appData: appDataType) => {
    console.log('Hello!')
};
export const subscribe = (observer: (appData: appDataType) => void) => {
    renderAppHandler = observer;
}

export const appData: appDataType = {
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
        newPostText: '',
        changeNewPostText: (textData) => {
            appData.profilePage.newPostText = textData;
            renderAppHandler(appData);
        },
        addPost: () => {
            if (appData.profilePage.newPostText.trim()) {
                appData.profilePage.posts.push({
                    id: v1(),
                    avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png',
                    text: appData.profilePage.newPostText.trim(),
                    date: 'June 22, 2022',
                    numOfLikes: 0
                });
                appData.profilePage.newPostText = '';
                renderAppHandler(appData);
            }
        },
        addLikeToPost: (id) => {
            appData.profilePage.posts = appData.profilePage.posts.map(el => {
                return (
                    el.id === id ? {...el, numOfLikes: el.numOfLikes + 1} : el
                )
            });
            renderAppHandler(appData);
        }
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
        newMessageText: '',
        changeNewMessageText: (messageData: string) => {
            appData.dialoguesPage.newMessageText = messageData;
            renderAppHandler(appData);
        },
        addMessage: () => {
            if (appData.dialoguesPage.newMessageText.trim()) {
                appData.dialoguesPage.messagesData.push({
                    id: v1(), avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
                    name: 'Alex',
                    message: appData.dialoguesPage.newMessageText,
                    time: '22:05'
                });
                appData.dialoguesPage.newMessageText = '';
                renderAppHandler(appData);
            }
        }
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
}