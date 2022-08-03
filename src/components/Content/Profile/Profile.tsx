import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, profilePageType} from "../../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: actionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profileWrapper}>
            <div className={s.backgroundContent}>
            </div>
            <ProfileInfo profileInfo={props.profilePage.profileInfo}/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostValue={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}