import React from "react";
import s from './Likes.module.css';

type LikesPropsType = {
    numOfLikes: number
    callback: () => void
}

export const Likes = (props: LikesPropsType) => {

    const onclickHandler = () => {
        props.callback();
    }

    return (
        <div className={s.likesWrapper}>
            <div className={s.numOfLikes}>
                <p>{props.numOfLikes}</p>
            </div>
            <div className={s.likesImg}>
                <img
                    onClick={onclickHandler}
                    src="https://www.freeiconspng.com/uploads/like-button-png-2.png"
                    alt="like"
                />
            </div>
        </div>
    )
}