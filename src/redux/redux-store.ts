import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer, {profilePageType, profileReducerActionType} from "./profile-reducer";
import dialoguesReducer, {dialoguesPageType, dialoguesReducerActionType} from "./dialogues-reducer";
import friendsReducer, {friendReducerActionType, friendsPageType} from "./friends-reducer";

export type stateType = {
    profilePage: profilePageType
    dialoguesPage: dialoguesPageType
    friendsPage: friendsPageType
}

export type StoreType = typeof store;

type actionType = profileReducerActionType | dialoguesReducerActionType | friendReducerActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    friendsPage: friendsReducer
})

export const store = createStore(reducers);