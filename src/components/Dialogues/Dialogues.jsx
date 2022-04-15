import React from "react";
import {NavLink} from "react-router-dom";

import s from './Dialogues.module.css'


const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.id} className={({isActive}) => isActive ? s.active : ''}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.content}</div>
    )
}


export const Dialogues = () => {
    return (
        <div className={s.contentWrapper}>
            <h2>Dialogues</h2>
            <div className={s.content}>
                <div className={s.dialogs}>
                    <Dialog name={'Alex'} id={1}/>
                    <Dialog name={'Marry'} id={2}/>
                    <Dialog name={'Andrey'} id={3}/>
                    <Dialog name={'Olga'} id={4}/>
                    <Dialog name={'Sergey'} id={5}/>
                </div>
                <div className={s.messages}>
                    <Message content={'Hello!'}/>
                    <Message content={'How are you?'}/>
                    <Message content={'I am fine!'}/>
                </div>
            </div>
        </div>
    );
}