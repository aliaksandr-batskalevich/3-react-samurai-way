import React from "react";
import s from './Post.module.css';
import {Likes} from "./Likes/Likes";
import {postType} from "../../../../../../redux/state";
type PostPropsType = {
    data: postType
    addLikeToPostCallback: (id: string) => void
}

export const Post = (props: PostPropsType) => {

    const addLikeToPostHandler = () => {
        props.addLikeToPostCallback(props.data.id)
    }

    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img className={s.img} src={props.data.avatar} alt="avatar"/>
            </div>
            <p className={s.message}>{props.data.text} <span className={s.date}>{props.data.date}</span></p>
           <Likes numOfLikes={props.data.numOfLikes} callback={addLikeToPostHandler}/>
        </div>
    )
}