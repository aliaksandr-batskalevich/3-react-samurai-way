import React from "react";
import s from './Posts.module.css';
import {Post} from "./Post/Post";

export type postType = {
    id: string
    avatar: string
    text: string
    numOfLikes: number
}
type postsArrType = Array<postType>

export const Posts = () => {

    const postsArr: postsArrType = [
        {id: '1234', avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png', text: 'Hello! I am Alex!', numOfLikes: 0},
        {id: '12345', avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png', text: 'It is my firs post!', numOfLikes: 0},
        {id: '123456', avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1643607932_3-papik-pro-p-logotip-koshka-3.png', text: 'And second! :)', numOfLikes: 0}
    ]

    return (
        <div className={s.postsWrapper}>
            {postsArr.reverse().map(el => {
                return (
                    <Post key={el.id} data={el}/>
                )
            })}
        </div>
    )
}