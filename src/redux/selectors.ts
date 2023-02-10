import {RootStateType} from "./redux-store";
import {CatsType, PaginatorDataType} from "./cats-reducer";
import {DialoguesPageType} from "./dialogues-reducer";
import {friendsPageType} from "./friends-reducer";

// app
export const getIsAppInit = (state: RootStateType): boolean => state.init.isInit;

// catsPage
export const getCats = (state: RootStateType): CatsType => state.catsPage.cats;
export const getCurrentPage = (state: RootStateType): number => state.catsPage.currentPage;
export const getCatsOnPage = (state: RootStateType): number => state.catsPage.catsOnPage;
export const getTotalPage = (state: RootStateType): number => state.catsPage.totalPage;
export const getToggleIsFetching = (state: RootStateType): boolean => state.catsPage.toggleIsFetching;
export const getFollowingInProgress = (state:RootStateType): Array<number> => state.catsPage.followingInProgress;
export const getPaginatorData = (state: RootStateType): PaginatorDataType => {
    let {cats, followingInProgress, toggleIsFetching, ...rest} = state.catsPage;
    return rest;
}

// dialoguesPage
export const getDialoguesPage = (state: RootStateType): DialoguesPageType => state.dialoguesPage;

// friendsPage
export const getFriendsPage = (state: RootStateType): friendsPageType => state.friendsPage;