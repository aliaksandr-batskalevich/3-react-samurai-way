import React from "react";
import s from './Posts.module.css';
import {Post} from "./Post/Post";
import {postsType} from "../../../../../redux/profile-reducer";

type PostsPropsType = {
    posts: postsType;
    addLikeToPostCallback: (id: string) => void
}

export const Posts = (props: PostsPropsType) => {

    let posts = props.posts.map(el => {
        return (
            <Post
                key={el.id}
                data={el}
                addLikeToPostCallback={props.addLikeToPostCallback}
            />
        )
    });

    return (
        <div className={s.postsWrapper}>
            {posts.reverse()}
        </div>
    )
}