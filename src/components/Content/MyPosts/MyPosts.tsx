import React from "react";
import s from './MyPosts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h2>MY POSTS</h2>
            <NewPost/>
            <Posts/>
        </div>
    )
}