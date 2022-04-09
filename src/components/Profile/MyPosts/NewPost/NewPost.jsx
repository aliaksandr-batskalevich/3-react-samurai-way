import React from "react";
import s from './NewPost.module.css'

export const NewPost = () => {
    return (
        <div className={s.newPost}>
            <textarea name="" id="" cols="" rows=""></textarea>
            <button>Add post</button>
        </div>
    );
}