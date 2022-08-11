import React from "react";
import s from './DialogueItem.module.css';
import {NavLink} from "react-router-dom";
import {dialogueType} from "../../../../redux/dialogues-reducer";

type dialogPropsType = {
    data: dialogueType
}

export const DialogueItem = (props: dialogPropsType) => {
    return (
        <div className={s.dialogue}>
            <NavLink to={props.data.name.toLowerCase()}
                     className={({isActive}) => isActive ? s.activeDialogue : ''}>{props.data.name}</NavLink>
        </div>
    )
}
