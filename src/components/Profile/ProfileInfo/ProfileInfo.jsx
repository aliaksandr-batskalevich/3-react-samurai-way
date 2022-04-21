import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
    return (
            <div className={s.avatar}>
                <img src={props.profileInfo.avatar}/>
                <div className={s.description}>
                    <h3>{props.profileInfo.name}</h3>
                    <p>Date of birth: {props.profileInfo.birthday}</p>
                    <p>City: {props.profileInfo.city}</p>
                    <p>Education: {props.profileInfo.education}</p>
                    <p>Web-site: {props.profileInfo.webSite}</p>
                </div>
            </div>
    );
}