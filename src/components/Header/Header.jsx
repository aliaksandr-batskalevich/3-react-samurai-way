import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <img className={s.headerLogo}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"
                     alt="logo"/>
            </div>
        </header>
    )
}