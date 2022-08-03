import React from "react";
import s from './Posts.module.css';
import {Post} from "./Post/Post";
import {actionType, postsType} from "../../../../../redux/state";

type PostsPropsType = {
    posts: postsType
    dispatch: (action: actionType) => void
}

export const Posts = (props: PostsPropsType) => {

    let posts = props.posts.map(el => {
        return (
            <Post key={el.id} data={el} dispatch={props.dispatch}/>
        )
    });

    return (
        <div className={s.postsWrapper}>
            {posts.reverse()}
        </div>
    )
}