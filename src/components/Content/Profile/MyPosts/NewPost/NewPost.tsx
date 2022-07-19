import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './NewPost.module.css';

type NewPostPropsType = {
    addPostCallBack: (postMessage: string) => void
}

export const NewPost = (props: NewPostPropsType) => {

    let [textAreaData, setTextAreaData] = useState<string>('');

    const setTextData = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaData(event.currentTarget.value);
    }
    const addPost = () => {
        props.addPostCallBack(textAreaData);
        setTextAreaData('');
    }
    const onKeyPressTextAeaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && addPost();
    }
    const onClickButtonHandler = () => {
        addPost();
    }

    return (
        <div className={s.newPost}>
            <textarea
                placeholder='New post...'
                value={textAreaData}
                onChange={setTextData}
                onKeyPress={onKeyPressTextAeaHandler}
            />
            <button onClick={onClickButtonHandler}>ADD</button>
        </div>
    )
}