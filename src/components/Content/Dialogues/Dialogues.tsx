import React from "react";
import s from './Dialogues.module.css';
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {dialoguesPageType} from "../../../redux/state";

type DialoguesPropsType = {
    dialogues: dialoguesPageType
}

export const Dialogues = (props: DialoguesPropsType) => {

    let dialogues = props.dialogues.dialoguesData.map(el => {
        return (
            <DialogueItem key={el.id} data={el}/>
        )
    });
    let messages = props.dialogues.messagesData.map(el => {
        return (
            <Message key={el.id} data={el}/>
        )
    })

    return (
        <div className={s.dialoguesWrapper}>
            <div className={s.dialogues}>
                {dialogues}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}