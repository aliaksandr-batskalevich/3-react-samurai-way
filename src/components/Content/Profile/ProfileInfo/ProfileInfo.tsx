import React from "react";
import s from './ProfileInfo.module.css';
import {profileInfoType} from "../../../../redux/state";

type ProfileInfoPropsType = {
    profileInfo: profileInfoType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={s.description}>
            <div className={s.avatar}>
                <img src={props.profileInfo.avatarImg}/>
            </div>
            <div className={s.aboutMe}>
                <h2>ABOUT ME</h2>
                <div className={s.tableWrapper}>
                    <table>
                        <tr>
                            <th>first name:</th>
                            <td>{props.profileInfo.firstName}</td>
                        </tr>
                        <tr>
                            <th>last name:</th>
                            <td>{props.profileInfo.lastName}</td>
                        </tr>
                        <tr>
                            <th>birthday:</th>
                            <td>{props.profileInfo.birthday}</td>
                        </tr>
                        <tr>
                            <th>city:</th>
                            <td>{props.profileInfo.city}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
