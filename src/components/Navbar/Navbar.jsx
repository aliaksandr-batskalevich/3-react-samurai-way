import React from "react";
import s from './Navbar.module.css'
import {NavButtons} from "./NavButtons/NavButtons";
import {SideBar} from "./SideBar/SideBar";


export const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <NavButtons navButtons={props.navBarPage.navButtons}/>
            <SideBar sideBar={props.navBarPage.sideBar}/>

            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/profile' className={({isActive}) => isActive ? s.active : ''}>Profile</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/dialogues" className={({isActive}) => isActive ? s.active : ''}>Message</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/news" className={({isActive}) => isActive ? s.active : ''}>News</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/music" className={({isActive}) => isActive ? s.active : ''}>Music</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/settings" className={({isActive}) => isActive ? s.active : ''}>Settings</NavLink>*/}
            {/*</div>*/}
        </nav>
    )
}