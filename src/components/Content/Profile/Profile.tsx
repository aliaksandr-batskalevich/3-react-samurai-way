import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profileWrapper}>
            <div className={s.backgroundContent}>
            </div>
            <ProfileInfo profileInfo={props.profilePage.profileInfo}/>
            <MyPosts
                posts={props.profilePage.posts}
                addPostCallBack={props.profilePage.addPost}
                changeNewPostTextCallback={props.profilePage.changeNewPostText}
                newPostValue={props.profilePage.newPostText}
                addLikeToPostCallback={props.profilePage.addLikeToPost}
            />
        </div>
    )
}