import React from "react";
import s from './NavBar.module.css'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/' className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/friends' className={({isActive}) => isActive ? s.activeLink : ''}>Friends</NavLink>
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
        </nav>
    )
}