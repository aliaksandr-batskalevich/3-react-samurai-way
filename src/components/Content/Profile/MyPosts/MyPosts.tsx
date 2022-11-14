import React from "react";
import s from './MyPosts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";
import {postsType} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: postsType
    newPostValue: string
    addPostCallback: () => void
    changePostTextCallback: (text: string) => void
    addLikeToPostCallback: (id: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.myPostsWrapper}>
            <h2>MY POSTS</h2>
            <NewPost
                newPostValue={props.newPostValue}
                changePostTextCallback={props.changePostTextCallback}
                addPostCallback={props.addPostCallback}
            />
            <Posts
                posts={props.posts}
                addLikeToPostCallback={props.addLikeToPostCallback}
            />
            <p className={s.context}>section in progress, no API</p>
        </div>
    )
}