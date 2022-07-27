import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './NewPost.module.css';

type NewPostPropsType = {
    changeNewPostTextCallback: (postMessage: string) => void
    addPostCallBack: () => void
    newPostText: string
}

export const NewPost = (props: NewPostPropsType) => {

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostTextCallback(event.currentTarget.value);
    }
    const onKeyPressTextAeaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && props.addPostCallBack();
    }
    const onClickButtonHandler = () => {
       props.addPostCallBack();
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