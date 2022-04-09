import React from "react";
import {MyPosts} from './MyPosts/MyPosts'
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.contentTopImage}></div>
            <div className={s.avatar}>
                <img src="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg"/>
                <div className={s.description}>
                    <h2>Aliaksandr B.</h2>
                    <p>Date of birth: 16 september</p>
                    <p>City: Brest</p>
                    <p>Education: KII'10</p>
                    <p>Web-site: http://it-kamasutra.com</p>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
}