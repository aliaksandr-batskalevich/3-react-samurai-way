import React from "react";
import s from './SideBar.module.css'
import {NavButtons} from "../NavButtons/NavButtons";
import {ThreeFriends} from './ThreeFriends/ThreeFriends';

export const SideBar = (props) => {
    return (
        <div className={s.sideBarWrapper}>
            <NavButtons navButtons={props.sideBar.sideBarButton}/>
            <ThreeFriends threeFriends={props.sideBar.threeFriends}/>
        </div>
    )
}