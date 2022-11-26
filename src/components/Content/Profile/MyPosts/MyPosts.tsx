import React from "react";
import s from './MyPosts.module.css';
import NewPost, {FormDataType} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";
import {postsType} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: postsType
    addPostCallback: (newPostText: string) => void
    addLikeToPostCallback: (id: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const onSubmitNewPostHandler = (data: FormDataType) => {
        props.addPostCallback(data.postTextarea)
    }

    return (
        <div className={s.myPostsWrapper}>
            <h2>MY POSTS</h2>
            <NewPost
               onSubmit={onSubmitNewPostHandler}
            />
            <Posts
                posts={props.posts}
                addLikeToPostCallback={props.addLikeToPostCallback}
            />
            <p className={s.context}>section in progress, no API</p>
        </div>
    )
}