import React from "react";
import s from './Auth.module.css'
import {NavLink} from "react-router-dom";
import nullAvatar from "../../../assets/images/nullAvatar.png";

type AuthPropsType = {
    isAuth: boolean
    login: null | string

    avatarSrc: null | string
    logOut: () => void
}

export const Auth = (props: AuthPropsType) => {
    return (
        <div className={s.authWrapper}>
            {props.isAuth
                ? <div className={s.userWrapper}>
                    <div className={s.avatarWrapper}>
                        <img src={props.avatarSrc ? props.avatarSrc : nullAvatar} alt="avatar"/>
                    </div>
                    {props.login}
                    <button className={s.logOutButton} onClick={props.logOut}>logout</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    )
}