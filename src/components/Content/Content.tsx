import React from "react";
import s from './Content.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.backgroundContent}>
            </div>
            <div className={s.description}>
                <div className={s.avatar}>
                    <img src="https://99px.ru/sstorage/56/2012/12/mid_76508_1420.jpg" alt="avatar"/>
                </div>
                <div className={s.aboutMe}>
                    <h2>ABOUT ME</h2>
                    <div className={s.tableWrapper}>
                        <table>
                            <tr>
                                <th>first name:</th>
                                <td>Aliaksandr</td>
                            </tr>
                            <tr>
                                <th>second name:</th>
                                <td>Batskalevich</td>
                            </tr>
                            <tr>
                                <th>birthday:</th>
                                <td>september 16, 1988</td>
                            </tr>
                            <tr>
                                <th>city:</th>
                                <td>Brest</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}