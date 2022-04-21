import React, {useState} from "react";
import {NewPost} from "./NewPost/NewPost";
import {Posts} from './Posts/Posts'
import s from './MyPosts.module.css'
import {v1} from "uuid";

export const MyPosts = (props) => {
    const [postsArr, setPostsArr] = useState(props.postsData);
    const addPost = (phrase) => {
        setPostsArr([...postsArr, {id: v1(), content: phrase, likes: 0}]);
    }

    return (
        <div className={s.myPostsWrapper}>
            <h3>My posts</h3>
            <NewPost callback={addPost}/>
            <Posts postsDate={postsArr}/>
        </div>
    );
}