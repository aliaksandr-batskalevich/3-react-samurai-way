import React from "react";
import s from './Messages.module.css'

export const Messages = (props) => {

    const messagesElement = props.messagesData.map(m => {
        if (m.name === 'Alex')
        {
            return (
                <div key={m.id} className={s.messageMe}>
                    <div className={s.flexWrapper}>
                        <div className={s.avatarWrapper}>
                            <img src={m.avatar} alt="avatar"/>
                        </div>
                        <div className={s.textWrapper}>
                            <h3 className={s.name}>{m.name}:</h3>
                            <p className={s.textOfMessage}>{m.message}</p>
                            <p className={s.time}>{m.time}</p>
                            <div className={s.triangle}></div>
                        </div>
                    </div>
                </div>
            )
        }
        else
        {
            return (
                <div key={m.id} className={s.messageAnother}>
                    <div className={s.flexWrapper}>
                        <div className={s.textWrapper}>
                            <h3 className={s.name}>{m.name}:</h3>
                            <p className={s.textOfMessage}>{m.message}</p>
                            <p className={s.time}>{m.time}</p>
                            <div className={s.triangle}></div>
                        </div>
                        <div className={s.avatarWrapper}>
                            <img src={m.avatar} alt="avatar"/>
                        </div>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className={s.messages}>
            {messagesElement}
        </div>
    )
}