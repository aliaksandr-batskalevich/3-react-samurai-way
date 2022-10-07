import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer, {ProfilePageType, profileReducerActionType} from "./profile-reducer";
import dialoguesReducer, {dialoguesPageType, dialoguesReducerActionType} from "./dialogues-reducer";
import friendsReducer, {friendReducerActionType, friendsPageType} from "./friends-reducer";
import catsReducer, {CatsPageType, catsReducerActionType} from "./cats-reducer";
import authReducer from "./auth-reducer";

// export type StateType = {
//     profilePage: ProfilePageType
//     dialoguesPage: dialoguesPageType
//     friendsPage: friendsPageType
//     catsPage: CatsPageType
// }

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

export const store = createStore(rootReducer);