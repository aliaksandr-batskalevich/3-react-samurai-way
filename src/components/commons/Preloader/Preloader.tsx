import React from "react";
import s from './Preloader.module.css'
import preloader from './../../../assets/preloader/spinnerPreloader.gif'

type PreloaderPropsType = {
    toggleIsFetching: boolean
}

export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div className={s.preloaderWrapper}>
            {props.toggleIsFetching && <img src={preloader} alt="preloader"/>}
        </div>
    )
}