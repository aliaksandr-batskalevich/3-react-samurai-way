import React from "react";
import s from './Button.modul.css'

export const Button = (props) => {
    return (
        <button className={s.button} onClick={props.callback}>{props.name}</button>
    )
}