import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './NewPost.module.css';

type NewPostPropsType = {
    newPostValue: string
    addPostCallback: () => void
    changePostTextCallback: (text: string) => void
}

export const NewPost = (props: NewPostPropsType) => {

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostTextCallback(event.currentTarget.value);
    };

    const onKeyPressTextAeaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && props.addPostCallback();
    };

    const onClickButtonHandler = () => {
        props.addPostCallback();
    };

    return (
        <div className={s.newPost}>
            <textarea
                placeholder='New post...'
                value={props.newPostValue}
                onChange={onChangeTextAreaHandler}
                onKeyPress={onKeyPressTextAeaHandler}
            />
            <button onClick={onClickButtonHandler}>ADD</button>
        </div>
    )
}