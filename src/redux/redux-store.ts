import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer, {ProfileReducerActionType} from "./profile-reducer";
import dialoguesReducer, {DialoguesReducerActionType} from "./dialogues-reducer";
import friendsReducer, {FriendReducerActionType} from "./friends-reducer";
import catsReducer, {CatsReducerActionType} from "./cats-reducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkDispatch} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {initAppReducer, InitAppReducerActionType} from "./initApp-reducer";


export type RootStateType = ReturnType<typeof rootReducer>;
export type DispatchThunkType = ThunkDispatch<RootStateType, unknown, ActionsType>;
export type ActionsType =
    ProfileReducerActionType
    | DialoguesReducerActionType
    | FriendReducerActionType
    | CatsReducerActionType
    | InitAppReducerActionType;

type StoreType = typeof store;


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    friendsPage: friendsReducer,
    catsPage: catsReducer,
    authData: authReducer,
    form: formReducer,
    init: initAppReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;