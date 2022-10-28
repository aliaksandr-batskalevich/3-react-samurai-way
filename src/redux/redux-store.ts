import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer, {profileReducerActionType} from "./profile-reducer";
import dialoguesReducer, {dialoguesReducerActionType} from "./dialogues-reducer";
import friendsReducer, {friendReducerActionType} from "./friends-reducer";
import catsReducer, {catsReducerActionType} from "./cats-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

export type StateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store;

export type ActionType = profileReducerActionType | dialoguesReducerActionType | friendReducerActionType | catsReducerActionType


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    friendsPage: friendsReducer,
    catsPage: catsReducer,
    authData: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));