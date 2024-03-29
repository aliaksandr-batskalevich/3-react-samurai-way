import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {SideBarContainer} from "./SideBar/SideBarContainer";
import {RootStateType} from "../../redux/redux-store";
import {useSelector} from "react-redux";

export const NavBar = () => {

    const isAuth = useSelector<RootStateType, boolean>(state => state.authData.isAuth);
    const authId = useSelector<RootStateType, null | number>(state => state.authData.id);

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={isAuth ? `/profile/${authId}` : `/`}
                         className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/cats' className={({isActive}) => isActive ? s.activeLink : ''}>Cats :)</NavLink>
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
            <SideBarContainer/>
        </nav>
    )
}