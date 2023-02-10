import profileReducer, {
    addLikeToPost,
    addPost,
    ProfileInfoType,
    ProfilePageType,
    removePost,
    setProfileInfo, setStatusIsLoading, setToggleIsFetching, updateProfileStatus
} from "./profile-reducer";
import {v1} from "uuid";

let state = {} as ProfilePageType;

beforeEach(() => {
    state = {
        profileInfo: {
            userId: null,
            fullName: null,
            photos: {
                small: null,
                large: null
            },
            aboutMe: {
                isLoading: false,
                status: ''
            },
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
    }
});

test('new post should be added', () => {
    let newPostText = 'new post';
    let action = addPost(newPostText);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(state.posts.length + 1);
    expect(newState.posts.at(-1)!.text).toBe(newPostText);
    expect(newState.posts.at(-1)!.numOfLikes).toBe(0);
});

test('post should be deleted', () => {
    let postId = state.posts[0].id;
    let action = removePost(postId);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(state.posts.length - 1);
    expect(newState.posts.some(p => p.id === postId)).toBe(false);
});

test ('like should be added', () => {
    let postId = state.posts[0].id;
    let action = addLikeToPost(postId);
    let newState = profileReducer(state, action);

    expect(newState.posts[0].numOfLikes).toBe(state.posts[0].numOfLikes + 1);
    expect(newState.posts.length).toBe(state.posts.length);
    expect(newState.posts[0]).not.toBe(state.posts[0]);
    expect(newState.posts[1]).toBe(state.posts[1]);
});

test('profileInfo should be added', () => {
    let profileInfo = {
        userId: 1,
        fullName: 'Aliaksandr Batskalevich',
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
    } as ProfileInfoType;
    let action = setProfileInfo(profileInfo);
    let newState = profileReducer(state, action);

    expect(newState.profileInfo.userId).toBe(1);
    expect(newState.profileInfo.fullName).not.toBe(null);
    expect(newState.profileInfo).not.toBe(state.profileInfo);
    expect(newState.profileInfo.contacts).not.toBe(state.profileInfo.contacts);
});

test('toggleIsFetching should be changed', () => {
    let newStatus = false;
    let action = setToggleIsFetching(newStatus);
    let newState = profileReducer(state, action);

    expect(newState.toggleIsFetching).toBe(newStatus);
});

test('profile status should be changed', () => {
    let status = 'new status';
    let action = updateProfileStatus(status);
    let newState = profileReducer(state, action);

    expect(newState.profileInfo.aboutMe!.status).toBe(status);
});

test('loading status should be set', () => {
    let newSet = true;
    let action = setStatusIsLoading(newSet);
    let newState = profileReducer(state, action);

    expect(newState.profileInfo.aboutMe!.isLoading).toBe(newSet);
    expect(newState.profileInfo.aboutMe!.isLoading).not.toBe(state.profileInfo.aboutMe!.isLoading);
});



