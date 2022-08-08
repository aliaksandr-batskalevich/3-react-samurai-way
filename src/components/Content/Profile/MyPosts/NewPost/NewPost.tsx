import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './NewPost.module.css';
import {actionType} from "../../../../../redux/state";
import {addPostAC, changeNewPostTextAC} from "../../../../../redux/profile-reducer";

type NewPostPropsType = {
    newPostText: string
    dispatch: (action: actionType) => void
}

export const NewPost = (props: NewPostPropsType) => {

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let action = changeNewPostTextAC(event.currentTarget.value)
        props.dispatch(action);
    }
    const onKeyPressTextAeaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        let action = addPostAC();
        event.key === 'Enter' && props.dispatch(action);
    }
    const onClickButtonHandler = () => {
        let action = addPostAC();
       props.dispatch(action);
    }

    return (
        <div className={s.newPost}>
            <textarea
                placeholder='New post...'
                value={props.newPostText}
                onChange={onChangeTextAreaHandler}
                onKeyPress={onKeyPressTextAeaHandler}
            />
            <button onClick={onClickButtonHandler}>ADD</button>
        </div>
    )
}