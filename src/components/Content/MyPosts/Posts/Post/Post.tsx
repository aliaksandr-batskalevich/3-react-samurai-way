import React from "react";
import s from './Post.module.css';
import {postType} from "../Posts";
import {Likes} from "./Likes/Likes";
type PostPropsType = {
    data: postType
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img className={s.img} src={props.data.avatar} alt="avatar"/>
            </div>
            <p className={s.message}>{props.data.text}</p>
           <Likes numOfLikes={props.data.numOfLikes}/>
        </div>
    )
}