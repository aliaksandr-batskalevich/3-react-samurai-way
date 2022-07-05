import React from "react";
import s from './MyPosts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";
import {postsType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: postsType
}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.myPosts}>
            <h2>MY POSTS</h2>
            <NewPost/>
            <Posts posts={props.posts}/>
        </div>
    )
}