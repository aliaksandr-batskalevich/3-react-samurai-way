import React from "react";
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {friendsPageType} from "../../../redux/state";
import {Friend} from "./Friend/Friend";

type SideBarDataPropsType = {
    sideBarData: friendsPageType
}

export const SideBar = (props: SideBarDataPropsType) => {

    let friends = props.sideBarData.map( el => {
        return (
            <Friend friendData={el} />
        )
    });
    friends.length = 3;

    return (
        <div className={s.sideBarWrapper}>
            <div className={s.navLinkWrapper}><NavLink to='/friends' className={({isActive}) => isActive ? s.activeLink : ''}>Friends ({props.sideBarData.length})</NavLink></div>
            <div className={s.friendsWrapper}>{friends}</div>
        </div>
    )
}