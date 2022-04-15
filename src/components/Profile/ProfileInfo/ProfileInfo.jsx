import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
            <div className={s.avatar}>
                <img src="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg"/>
                <div className={s.description}>
                    <h3>Aliaksandr B.</h3>
                    <p>Date of birth: 16 september</p>
                    <p>City: Brest</p>
                    <p>Education: KII'10</p>
                    <p>Web-site: http://it-kamasutra.com</p>
                </div>
            </div>
    );
}