import React from "react";
import s from './Friend.module.css'
import {friendType} from "../../../../redux/friends-reducer";

type FriendPropsType = {
    friendData: friendType
}

export const Friend = (props: FriendPropsType) => {
    return (

        <div className={s.friendWrapper}>
            <div className={s.avatarWrapper}>
                <img src={props.friendData.avatar} alt="avatarOfFriend"/>
            </div>
            <div className={s.nameWrapper}>
                <p>{props.friendData.name}</p>
            </div>
        </div>
    )
}