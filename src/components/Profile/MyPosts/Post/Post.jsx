import React from "react";
import s from './Post.module.css'

export const Post = (props) => {
    return (
        <>
            {props.date.map(post => {
                return (
                <div className={s.postWrapper} key={post.id}>
                    <p>{post.content}</p>
                    <img className={s.likeImg} src="https://pngimg.com/uploads/like/like_PNG55.png" alt="like" onClick={() => props.callback(post.id)}/>
                    <span>{post.likes}</span>
                </div>
                )
            })}
        </>
    )
}