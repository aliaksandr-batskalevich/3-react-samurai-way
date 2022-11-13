import React from "react";
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import {friendsPageType} from "../../../redux/friends-reducer";

type SideBarPropsType = {
    friendsPage: friendsPageType
}

export const SideBar = (props: SideBarPropsType) => {

    let stateForFriendsPage = props.friendsPage;
    let friends = stateForFriendsPage.map((el, index) => {
        return (
            <Friend key={index} friendData={el}/>
        )
    });

    friends.length = 3;

    return (
        <div className={s.sideBarWrapper}>
            <div className={s.navLinkWrapper}><NavLink to='/friends'
                                                       className={({isActive}) => isActive ? s.activeLink : ''}>Friends
                ({stateForFriendsPage.length})</NavLink></div>
            <div className={s.friendsWrapper}>{friends}</div>
        </div>
    )
}