import React from "react";
import s from './Likes.module.css';

type LikesPropsType = {
    numOfLikes: number
}

export const Likes = (props: LikesPropsType) => {
    return (
        <div className={s.likesWrapper}>
            <div className={s.numOfLikes}>
                <p>{props.numOfLikes}</p>
            </div>
            <div className={s.likesImg}>
                <img src="https://www.freeiconspng.com/uploads/like-button-png-2.png" alt="like"/>
            </div>
        </div>
    )
}