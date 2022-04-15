import React, {useState} from "react";
import {NewPost} from "./NewPost/NewPost";
import {Post} from './Post/Post'
import s from './MyPosts.module.css'

export const MyPosts = () => {
    let idCounter = 4;
    const setId = () => idCounter++;

    const [postsArr, setPostsArr] = useState([
        {id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At doloremque eaque, eum in nihil non quam rerum soluta totam vero!', likes: 0},
        {id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, repellat.', likes: 0},
        {id: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque est nobis officiis quidem similique.', likes: 0}
    ]);

    const setLike = (id) => {
        setPostsArr(postsArr.map(element => {
            if (element.id === id) {
                return {id: id, content: element.content, likes: element.likes + 1}
            }
            return element;
        }))
    }

    return (
        <div className={s.myPostsWrapper}>
            <h3>My posts</h3>
            <NewPost/>
            <Post date={postsArr} callback={setLike}/>
        </div>
    );
}