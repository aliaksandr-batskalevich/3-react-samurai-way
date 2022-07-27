import React from "react";
import s from './MyPosts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";
import {postsType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: postsType
    changeNewPostTextCallback: (postMessage: string) => void
    addPostCallBack: () => void
    newPostValue: string
    addLikeToPostCallback: (id: string) => void

}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.myPosts}>
            <h2>MY POSTS</h2>
            <NewPost
                addPostCallBack={props.addPostCallBack}
                changeNewPostTextCallback={props.changeNewPostTextCallback}
                newPostText={props.newPostValue}
            />
            <Posts posts={props.posts} addLikeToPostCallback={props.addLikeToPostCallback}/>
        </div>
    )
}