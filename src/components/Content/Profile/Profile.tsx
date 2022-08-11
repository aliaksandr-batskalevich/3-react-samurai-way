import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profileWrapper}>
            <div className={s.backgroundContent}>
            </div>
            <ProfileInfo store={props.store}/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}