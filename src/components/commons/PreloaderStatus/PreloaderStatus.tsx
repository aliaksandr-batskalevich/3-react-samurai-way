import React from 'react';
import s from './PreloaderStatus.module.css'
import statusLoading from "../../../assets/preloader/statusLoading3.gif";

export const PreloaderStatus = () => {
    return (
        <div className={s.preloaderWrapper}>
            <img className={s.preloader} src={statusLoading} alt={'Status loading...'}/>
        </div>
    );
};