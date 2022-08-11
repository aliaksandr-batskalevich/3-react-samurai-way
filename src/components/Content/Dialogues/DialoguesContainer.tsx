import React from "react";
import {StoreType} from "../../../redux/redux-store";
import {Dialogues} from "./Dialogues";
import {addMessageAC, changeNewMessageTextAC, dialoguesPageType} from "../../../redux/dialogues-reducer";

type DialoguesPropsType = {
    store: StoreType
}

export const DialoguesContainer = (props: DialoguesPropsType) => {

    let storeForDialoguesPage: dialoguesPageType = props.store.getState().dialoguesPage;
    const changeNewMessageTextHandler = (messageData: string) => {
        let action = changeNewMessageTextAC(messageData);
        props.store.dispatch(action);
    };
    const sendMessageHandler = () => {
        let action = addMessageAC();
        props.store.dispatch(action);
    };

    return (
        <Dialogues
            storeForDialoguesPage={storeForDialoguesPage}
            changeNewMessageTextCallback={changeNewMessageTextHandler}
            sendMessageCallback={sendMessageHandler}
        />
    )
}