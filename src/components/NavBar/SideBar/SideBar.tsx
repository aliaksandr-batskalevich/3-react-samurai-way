import React from "react";
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import {StoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../redux/StoreContext";

type SideBarDataPropsType = {
    store: StoreType
}

export const SideBar = (props: SideBarDataPropsType) => {

    // let stateForFriendsPage: friendsPageType = props.store.getState().friendsPage;
    //
    // let friends = stateForFriendsPage.map(el => {
    //     return (
    //         <Friend friendData={el}/>
    //     )
    // });
    // friends.length = 3;

    return (
        <StoreContext.Consumer>
            {value => {
                let stateForFriendsPage1 = value.getState().friendsPage;
                let friends1 = stateForFriendsPage1.map(el => {
                    return (
                        <Friend friendData={el}/>
                    )
                });
                friends1.length = 3;
                return (
                    <div className={s.sideBarWrapper}>
                        <div className={s.navLinkWrapper}><NavLink to='/friends'
                                                                   className={({isActive}) => isActive ? s.activeLink : ''}>Friends
                            ({stateForFriendsPage1.length})</NavLink></div>
                        <div className={s.friendsWrapper}>{value ? friends1 : ''}</div>
                    </div>
                )
            }}
        </StoreContext.Consumer>
    )
}