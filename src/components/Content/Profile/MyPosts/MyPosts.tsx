import React from "react";
import s from './MyPosts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";
import {actionType, postsType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: postsType
    newPostValue: string
    dispatch: (action: actionType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.myPosts}>
            <h2>MY POSTS</h2>
            <NewPost
                dispatch={props.dispatch}
                newPostText={props.newPostValue}
            />
            <Posts
                posts={props.posts}
                dispatch={props.dispatch}
            />
        </div>
    )
}