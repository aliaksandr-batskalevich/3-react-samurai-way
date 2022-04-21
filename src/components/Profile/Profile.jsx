import React, {useState} from "react";
import {MyPosts} from './MyPosts/MyPosts'
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profileInfo={props.profileData.profileInfo}/>
            <MyPosts postsData={props.profileData.posts}/>
        </div>
    );
}