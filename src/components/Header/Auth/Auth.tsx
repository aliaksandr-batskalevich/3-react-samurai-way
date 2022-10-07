import React from "react";
import s from './Auth.module.css'
import {NavLink} from "react-router-dom";

type AuthPropsType = {
    isAuth: boolean
    login: null | string

    avatarSrc: null | string
}

export const Auth = (props: AuthPropsType) => {
    return (
        <div className={s.authWrapper}>
            {props.isAuth
                ? <div className={s.userWrapper}>
                    <div className={s.avatarWrapper}>
                        {props.avatarSrc && <img src={props.avatarSrc} alt="avatar"/>}
                    </div>
                    {props.login}
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    )
}