import {DispatchThunkType} from "./redux-store";
import {authApi, profileApi} from "../api/api";
import {setProfileInfo, setToggleIsFetching} from "./profile-reducer";
import {stopSubmit} from "redux-form";

export type AuthDataType = {
    isAuthing: boolean
    isAuth: boolean
    id: null | number
    login: null | string
    email: null | string
    avatarSrc: null | string
}
type AuthReducerActionType =
    ReturnType<typeof setUserData>
    | ReturnType<typeof setUserAvatar>
    | ReturnType<typeof setIsAuth>
    | ReturnType<typeof setIsAuthing>

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_AVATAR = 'SET-USER-AVATAR';
const SET_IS_AUTH = 'SET-IS_AUTH';
const SET_IS_AUTHING = 'SET_IS_AUTHING';
const SET_AUTH_ERR = 'SET_AUTH_ERR';

const initializeState: AuthDataType = {
    isAuthing: false,
    isAuth: false,
    id: null,
    login: null,
    email: null,
    avatarSrc: null,
}


const authReducer = (state: AuthDataType = initializeState, action: AuthReducerActionType) => {
    switch (action.type) {
        case SET_IS_AUTHING:
            return {...state, ...action.payload}
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_USER_AVATAR:
            return {...state, ...action.payload}
        case SET_IS_AUTH:
            return {...state, ...action.payload}
        default:
            return state
    }
};

export const setIsAuthing = (isAuthing: boolean) => {
    return {
        type: SET_IS_AUTHING,
        payload: {isAuthing}
    } as const;
};

export const setUserData = (id: number | null, login: string | null, email: string | null) => {
    return (
        {type: SET_USER_DATA, payload: {id, login, email}}
    ) as const;
};
export const setUserAvatar = (avatarSrc: null | string) => {
    return (
        {type: SET_USER_AVATAR, payload: {avatarSrc}}
    ) as const
};
export const setIsAuth = (isAuth: boolean) => {
    return {
        type: SET_IS_AUTH,
        payload: {isAuth}
    } as const;
};

export const authUserTC = () => (dispatch: DispatchThunkType) => {
    authApi.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setUserData(id, login, email));
                dispatch(setIsAuth(true));
                return profileApi.getProfile(id);
            } else {
                throw new Error(response.messages)
            }
        })
        .then(response => {
            dispatch(setUserAvatar(response.photos.small));
            dispatch(setProfileInfo(response));
            dispatch(setToggleIsFetching(false));
        })
        .catch(error => {
            console.warn(error);
        });
};


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: boolean) => (dispatch: DispatchThunkType) => {
    dispatch(setIsAuthing(true));
    authApi
        .login(email, password, rememberMe, captcha)
        .then(response => {
            dispatch(setIsAuthing(false));
            if (response.resultCode === 0) {
                dispatch(authUserTC());
            } else {
                dispatch(stopSubmit('login', {_error: response.messages ? response.messages.join(', ') : 'Some Error!'}));
                throw new Error(response.messages)
            }
        })
        .catch(error => {
            console.warn(error);
        })
}
export const logoutTC = () => (dispatch: DispatchThunkType) => {
    authApi.logout().then(response => {
        dispatch(setUserData(null, null, null))
        dispatch(setIsAuth(false));
    });
};

export default authReducer;