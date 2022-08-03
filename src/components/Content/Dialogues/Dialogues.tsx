import React, {ChangeEvent, KeyboardEvent, MouseEvent} from "react";
import s from './Dialogues.module.css';
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {actionType, addMessageAC, changeNewMessageTextAC, dialoguesPageType} from "../../../redux/state";

type DialoguesPropsType = {
    dialogues: dialoguesPageType
    dispatch: (action: actionType) => void
}

export const Dialogues = (props: DialoguesPropsType) => {

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let action = changeNewMessageTextAC(event.currentTarget.value);
        props.dispatch(action);
    };
    const sendMessage = () => {
        let action = addMessageAC();
        props.dispatch(action);
    };
    const onKeyPressTextAreaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && sendMessage();
    };
    const onClickButtonHandler = () => {
        sendMessage();
    };

    let dialogues = props.dialogues.dialoguesData.map(el => {
        return (
            <DialogueItem key={el.id} data={el}/>
        )
    });
    let messages = props.dialogues.messagesData.map(el => {
        return (
            <Message key={el.id} data={el}/>
        )
    });

    return (
        <div className={s.dialoguesWrapper}>
            <div className={s.dialogues}>
                {dialogues}
            </div>
            <div className={s.messages}>
                {messages}
                <div className={s.inputMessageWrapper}>
                    <textarea
                        className={s.textarea}
                        placeholder={'write new message...'}
                        value={props.dialogues.newMessageText}
                        onChange={onChangeTextAreaHandler}
                        onKeyPress={onKeyPressTextAreaHandler}
                    />
                    <button
                        className={s.button}
                        onClick={onClickButtonHandler}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}