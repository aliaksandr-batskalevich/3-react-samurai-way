import {v1} from "uuid";

export const state = {
    navBarPage: {
        navButtons: [
            {id: v1(), to: '/profile', title: 'Profile'},
            {id: v1(), to: '/dialogues', title: 'Message'},
            {id: v1(), to: '/news', title: 'News'},
            {id: v1(), to: '/music', title: 'Music'},
            {id: v1(), to: '/settings', title: 'Settings'}
        ],
        sideBar: {
            sideBarButton: [
                {id: v1(), to: '/friends', title: 'Friends'}
            ],
            threeFriends: [
                {
                    id: v1(),
                    name: 'Mou',
                    url: 'https://kitchen.cdnvideo.ru/wp-content/uploads/2019/12/kak-izbavitsya-ot-myshei-s-pomoshhju-zapahov.jpg'
                },
                {
                    id: v1(),
                    name: 'Cat',
                    url: 'https://www.purinaone.ru/cat/sites/default/files/2019-03/article_indoor-outdoor.jpg'
                },
                {
                    id: v1(),
                    name: 'Squ',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCjm2fzZlYOxZWkkI62Woom-EWASa88YZYA&usqp=CAU'
                },
            ]
        }
    },
    profilePage: {
        profileInfo: {
            name: 'Aliaksandr B.',
            birthday: '16 september',
            city: 'Brest',
            education: "KII'10",
            webSite: 'http://it-kamasutra.com',
            avatar: 'https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg'
        },
        posts: [
            {id: v1(), content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0},
            {id: v1(), content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0},
            {id: v1(), content: 'Lorem ipsum dolor sit amet.', likes: 0}
        ]
    },
    dialoguesPage: {
        dialog: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Marry'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Olga'},
            {id: v1(), name: 'Sergey'}
        ],
        messages: [
            {
                id: v1(),
                name: 'Alex',
                message: 'Hello',
                time: '10.20 PM',
                avatar: 'https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg'
            },
            {
                id: v1(),
                name: 'Marry',
                message: 'How are you?',
                time: '10.25 PM',
                avatar: 'https://sun9-40.userapi.com/c301801/u10253428/152581087/y_ad329fca.jpg'
            },
            {
                id: v1(),
                name: 'Alex',
                message: 'I am fine, and you?]',
                time: '10.30 PM',
                avatar: 'https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg'
            },
            {
                id: v1(),
                name: 'Marry',
                message: 'My favourite one is summer because it’s hot then and I can swim in a nearby river. When the weather is fine I can also ride my bike. However, it’s not always hot here even in summer. As I’ve mentioned before, the weather is rather changeable here. It can bring sunshine and heat one day, rain and cold the next day.',
                time: '10.35 PM',
                avatar: 'https://sun9-40.userapi.com/c301801/u10253428/152581087/y_ad329fca.jpg'
            }
        ]
    }
}