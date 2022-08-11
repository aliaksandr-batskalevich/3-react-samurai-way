import React from "react";
import s from './ProfileInfo.module.css';
import {StoreType} from "../../../../redux/redux-store";
import {profileInfoType} from "../../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    store: StoreType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    let stateForProfileInfo: profileInfoType = props.store.getState().profilePage.profileInfo

    return (
        <div className={s.description}>
            <div className={s.avatar}>
                <img src={stateForProfileInfo.avatarImg}/>
            </div>
            <div className={s.aboutMe}>
                <h2>ABOUT ME</h2>
                <div className={s.tableWrapper}>
                    <table>
                        <tr>
                            <th>first name:</th>
                            <td>{stateForProfileInfo.firstName}</td>
                        </tr>
                        <tr>
                            <th>last name:</th>
                            <td>{stateForProfileInfo.lastName}</td>
                        </tr>
                        <tr>
                            <th>birthday:</th>
                            <td>{stateForProfileInfo.birthday}</td>
                        </tr>
                        <tr>
                            <th>city:</th>
                            <td>{stateForProfileInfo.city}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
