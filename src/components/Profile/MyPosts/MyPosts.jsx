import React from "react";
import {NewPost} from "./NewPost/NewPost";
import {Post} from './Post/Post'
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h2>My posts</h2>
            <NewPost/>
            <Post content={'Name'}/>
            <Post content={'true'}/>
            <Post content={'back'}/>
        </div>
    );
}