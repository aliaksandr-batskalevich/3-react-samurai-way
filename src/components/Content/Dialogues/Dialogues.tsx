import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Dialogues.module.css';
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {DialoguesPageType} from "../../../redux/dialogues-reducer";
import NewMessageComponent, {FormDataType} from "./NewMessageComponent/NewMessageComponent";

type DialoguesPropsType = {
    dialoguesPage: DialoguesPageType
    sendMessageCallback: (newMessageText: string) => void
}

export const Dialogues = (props: DialoguesPropsType) => {

    const onSubmitNewMessageHandler = (value: FormDataType) => {
        props.sendMessageCallback(value.newMessageText);
    }

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
                    <NewMessageComponent onSubmit={onSubmitNewMessageHandler} />
                    </div>
                </div>
            </div>
            <p className={s.context}>section in progress, no API</p>
        </div>
    )
}