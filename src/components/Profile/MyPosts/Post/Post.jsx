import React from "react";
import s from './Post.module.css'

export const Post = (props) => {
    return (
        <div>
            <p>{props.content}</p>
            <div>
                <a href="#">like</a>
            </div>
        </div>
    );
}