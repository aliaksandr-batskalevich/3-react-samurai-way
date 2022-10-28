import {Dispatch} from "redux";
import {ActionType} from "./redux-store";
import {authApi, profileApi} from "../api/api";

export type AuthDataType = {
    isAuth: boolean
    id: null | number
    login: null | string
    email: null | string
    avatarSrc: null | string
}
type AuthReducerActionType = ReturnType<typeof setUserData> | ReturnType<typeof setUserAvatar>

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_AVATAR = 'SET-USER-AVATAR';

const initializeState: AuthDataType = {
    isAuth: false,
    id: null,
    login: null,
    email: null,
    avatarSrc: null,
}


const authReducer = (state: AuthDataType = initializeState, action: AuthReducerActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_USER_AVATAR:
            return {...state, ...action.payload}
        default:
            return state
    }
};

export const setUserData = (id: number, login: string, email: string) => {
    return (
        {type: SET_USER_DATA, payload: {isAuth: true, id, login, email}}
    ) as const;
};

export const setUserAvatar = (avatarSrc: null | string) => {
    return (
        {type: SET_USER_AVATAR, payload: {avatarSrc}}
    ) as const
};

export const authUser = () => (dispatch: Dispatch<ActionType>) => {
    authApi.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setUserData(id, login, email));
                return profileApi.getProfile(id);
            }
        })
        .then(response => {
            dispatch(setUserAvatar(response.photos.small));
        });
};

export default authReducer;