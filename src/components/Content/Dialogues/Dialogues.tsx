import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Dialogues.module.css';
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {dialoguesPageType} from "../../../redux/dialogues-reducer";

type DialoguesPropsType = {
    storeForDialoguesPage: dialoguesPageType
    changeNewMessageTextCallback: (text: string) => void
    sendMessageCallback: () => void
}

export const Dialogues = (props: DialoguesPropsType) => {

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageTextCallback(event.currentTarget.value);
    };

    const onKeyPressTextAreaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && props.sendMessageCallback();
    };
    const onClickButtonHandler = () => {
        props.sendMessageCallback();
    };

    let dialogues = props.storeForDialoguesPage.dialoguesData.map(el => {
        return (
            <DialogueItem key={el.id} data={el}/>
        )
    });
    let messages = props.storeForDialoguesPage.messagesData.map(el => {
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
                        value={props.storeForDialoguesPage.newMessageText}
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