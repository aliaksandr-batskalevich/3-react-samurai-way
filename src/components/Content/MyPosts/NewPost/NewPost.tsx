import React from "react";
import s from './NewPost.module.css';

export const NewPost = () => {
    return (
        <div className={s.newPost}>
            <textarea placeholder='New post...'/>
            <button>ADD</button>
        </div>
    )
}