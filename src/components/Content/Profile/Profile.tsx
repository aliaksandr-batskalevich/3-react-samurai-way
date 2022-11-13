import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts/MyPosts";
import {Preloader} from "../../commons/Preloader/Preloader";

type ProfilePropsType = {
    profilePage: ProfilePageType
    changeNewPostText: (textData: string) => void,
    addPost: () => void,
    addLikeToPost: (id: string) => void
    changeProfileStatus: (aboutMe: string) => void
    isMyAccountPage: boolean
}

export const Profile = (props: ProfilePropsType) => {
    return (
        props.profilePage.toggleIsFetching
            ? <Preloader/>
            : <div className={s.profileWrapper}>
                <div className={s.backgroundContent}/>
                <ProfileInfo
                    profileInfo={props.profilePage.profileInfo}
                    changeProfileStatus={props.changeProfileStatus}
                    isMyAccountPage={props.isMyAccountPage}
                />
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostValue={props.profilePage.newPostText}
                    changePostTextCallback={props.changeNewPostText}
                    addPostCallback={props.addPost}
                    addLikeToPostCallback={props.addLikeToPost}
                />
            </div>
    )
}