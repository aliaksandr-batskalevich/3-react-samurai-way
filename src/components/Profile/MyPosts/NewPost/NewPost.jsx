import React, {useState} from "react";
import s from './NewPost.module.css'
import {Button} from "../../../Buttons/Button";

export const NewPost = () => {

    return (
        <div className={s.newPostWrapper}>
            <textarea name="" id="" cols="" rows="" placeholder={'Add post...'}></textarea>
            <div className={s.buttonWrapper}>
                <Button name={'Add post'}/>
            </div>
        </div>
    );
}