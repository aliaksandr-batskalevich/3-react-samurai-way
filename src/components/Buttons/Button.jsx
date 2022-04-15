import React from "react";
import s from './Button.modul.css'

export const Button = (props) => {
    const buttonClick = props.event

    return (
        <button className={s.button} onClick={buttonClick}>{props.name}</button>
    )
}