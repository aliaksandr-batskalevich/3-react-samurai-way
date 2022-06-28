import React from "react";
import s from './Dialogues.module.css';
import {NavLink, Route, Routes} from "react-router-dom";

type DialoguePropsType = {
    id: string
    name: string
}
type MessagePropsType = {
    id: string
    value: string
}

const Dialogue = (props: DialoguePropsType) => {
    return (
        <div className={s.dialogue}>
            <NavLink to={props.name.toLowerCase()}
                     className={({isActive}) => isActive ? s.activeDialogue : ''}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.value}
        </div>
    )
}

export const Dialogues = () => {
    return (
        <div className={s.dialoguesWrapper}>
            <div className={s.dialogues}>
                <Dialogue id={'1'} name={'Marry'}/>
                <Dialogue id={'2'} name={'Alex'}/>
                <Dialogue id={'3'} name={'Andrej'}/>
                <Dialogue id={'4'} name={'Olga'}/>
                <Dialogue id={'5'} name={'Anna'}/>
            </div>
            <div className={s.messages}>
                <Message id={'1'} value={'Hi!'}/>
                <Message id={'2'} value={'How are you?'}/>
                <Message id={'3'} value={'Yo!'}/>
            </div>
        </div>
    )
}