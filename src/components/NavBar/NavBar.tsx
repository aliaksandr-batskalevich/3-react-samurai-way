import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {SideBar} from "./SideBar/SideBar";
import {friendsPageType} from "../../redux/state";

type NavBarPropsType = {
    sideBarData: friendsPageType
}

export const NavBar = (props: NavBarPropsType) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/' className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' className={({isActive}) => isActive ? s.activeLink : ''}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={({isActive}) => isActive ? s.activeLink : ''}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={({isActive}) => isActive ? s.activeLink : ''}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={({isActive}) => isActive ? s.activeLink : ''}>Settings</NavLink>
            </div>
            <SideBar sideBarData={props.sideBarData}/>
        </nav>
    )
}