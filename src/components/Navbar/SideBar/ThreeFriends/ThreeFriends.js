import React from "react";
import s from './ThreeFriends.module.css'

export const ThreeFriends = (props) => {
    const threeFriendsElement = props.threeFriends.map(f => {
        return (
            <div key={f.id} className={s.friendWrapper}>
                <div className={s.imgWrapper}>
                    <img className={s.friendImg} src={f.url} alt=""/>
                </div>
                <p className={s.friendsName}>{f.name}</p>
            </div>
        )
    })

    return (
        <div className={s.threeFriendsWrapper}>
            {threeFriendsElement}
        </div>
    )
}