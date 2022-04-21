import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialog.module.css'


export const Dialog = (props) => {
    const dialogsElement = props.dialogData.map(d => {
        return (
            <div key={d.id} className={s.dialog}>
                <NavLink to={d.name.toLowerCase()}>{d.name}</NavLink>
            </div>
        )
    });

    return (
        <div className={s.dialogs}>
            {dialogsElement}
        </div>
    )
}