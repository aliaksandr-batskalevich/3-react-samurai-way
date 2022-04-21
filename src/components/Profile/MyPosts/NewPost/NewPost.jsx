import React, {useState} from "react";
import s from './NewPost.module.css'
import {Button} from "../../../Buttons/Button";

export const NewPost = (props) => {
    const [phrase ,setPhrase] = useState('')

    const onChangeTextareaHandler = (textAreaData) => {
        setPhrase(textAreaData.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.callback(phrase);
        setPhrase('');
        console.log(phrase);
    }

    return (
        <div className={s.newPostWrapper}>
            <textarea onChange={onChangeTextareaHandler} value={phrase} name="" id="" cols="" rows="" placeholder={'Add post...'}></textarea>
            <div className={s.buttonWrapper}>
                <Button callback={onClickButtonHandler} name={'Add post'}/>
            </div>
        </div>
    );
}