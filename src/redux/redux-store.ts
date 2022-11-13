import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer, {profileReducerActionType} from "./profile-reducer";
import dialoguesReducer, {dialoguesReducerActionType} from "./dialogues-reducer";
import friendsReducer, {friendReducerActionType} from "./friends-reducer";
import catsReducer, {catsReducerActionType} from "./cats-reducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkDispatch} from 'redux-thunk';

export type StateType = ReturnType<typeof rootReducer>;
export type DispatchThunkType = ThunkDispatch<StateType, unknown, ActionsType>;
export type ActionsType = profileReducerActionType | dialoguesReducerActionType | friendReducerActionType | catsReducerActionType;



    let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    friendsPage: friendsReducer,
    catsPage: catsReducer,
    authData: authReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));