import React from "react";
import s from './Preloader.module.css'
import preloader from './../../../assets/preloader/spinnerPreloader.gif'

export const Preloader = () => {
    return (
        <div className={s.preloaderWrapper}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}