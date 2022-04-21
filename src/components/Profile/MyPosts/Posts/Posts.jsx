import React from "react";
import s from './Posts.module.css'

export const Posts = (props) => {
    const postsElement = props.postsDate.map(p => {
        return (
            <div className={s.postWrapper} key={p.id}>
                <p>{p.content}</p>
                <img className={s.likeImg} src="https://pngimg.com/uploads/like/like_PNG55.png" alt="like"/>
                <span>{p.likes}</span>
            </div>
        )
    });

    return (
        <>
            {postsElement}
        </>
    )
}