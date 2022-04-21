import React from "react";
import s from './Dialogues.module.css'
import {Dialog} from './Dialog/Dialog'
import {Messages} from "./Messages/Messages";

export const Dialogues = (props) => {
    return (
        <div className={s.contentWrapper}>
            <h2>Dialogues</h2>
            <div className={s.content}>
                <Dialog dialogData={props.dialoguesData.dialog}/>
                <Messages messagesData={props.dialoguesData.messages}/>
            </div>
        </div>
    );
}