import React from "react";
import s from './Header.module.css'
import AuthContainer from "./Auth/AuthContainer";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}><img
                src="https://papik.pro/uploads/posts/2021-11/thumbs/1636115978_47-papik-pro-p-logotip-nasa-foto-48.png"
                alt="logo"/></div>
            <h1><b>CAT'space</b> - create your planet...</h1>
            <AuthContainer/>
        </header>
    )
}