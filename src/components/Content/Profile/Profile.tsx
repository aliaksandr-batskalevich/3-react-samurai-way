import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType, profileInfoType} from "../../../redux/state";

type ProfilePropsType = {
    profileInfo: profileInfoType
    posts: postsType
    addPostCallBack: (postMessage: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profileWrapper}>
            <div className={s.backgroundContent}>
            </div>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MyPosts posts={props.posts} addPostCallBack={props.addPostCallBack}/>
        </div>
    )
}