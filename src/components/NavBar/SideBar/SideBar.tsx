import React from "react";
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {sideBarType} from "../../../redux/state";
import {Friend} from "./Friend/Friend";

type SideBarDataPropsType = {
    sideBarData: sideBarType
}

export const SideBar = (props: SideBarDataPropsType) => {

    let friends = props.sideBarData.map( el => {
        return (
            <Friend friendData={el} />
        )
    })

    return (
        <div className={s.sideBarWrapper}>
            <div className={s.navLinkWrapper}><NavLink to='/friends' className={({isActive}) => isActive ? s.activeLink : ''}>Friends</NavLink></div>
            <div className={s.friendsWrapper}>{friends}</div>
        </div>
    )
}