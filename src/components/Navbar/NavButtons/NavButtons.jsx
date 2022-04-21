import React from "react";
import s from './NavButtons.module.css'
import {NavLink} from "react-router-dom";

export const NavButtons = (props) => {
    const navButtonsElement = props.navButtons.map(b => {
        return (
            <div key={b.id} className={s.item}>
                <NavLink to={b.to} className={({isActive}) => isActive ? s.active : ''}>{b.title}</NavLink>
            </div>
        )
    })

    return (
        <>
            {navButtonsElement}
        </>
    )
}