import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Dialogues.module.css';
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {DialoguesPageType} from "../../../redux/dialogues-reducer";

type DialoguesPropsType = {
    dialoguesPage: DialoguesPageType
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

    let dialogues = props.dialoguesPage.dialoguesData.map(el => {
        return (
            <DialogueItem key={el.id} data={el}/>
        )
    });
    let messages = props.dialoguesPage.messagesData.map(el => {
        return (
            <Message key={el.id} data={el}/>
        )
    });

    return (
        <div className={s.mainWrapper}>
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
                        value={props.dialoguesPage.newMessageText}
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
            <p className={s.context}>section in progress, no API</p>
        </div>
    )
}