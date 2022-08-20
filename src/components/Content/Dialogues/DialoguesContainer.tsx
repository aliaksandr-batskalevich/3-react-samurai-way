import React from "react";
import {Dialogues} from "./Dialogues";
import {addMessageAC, changeNewMessageTextAC} from "../../../redux/dialogues-reducer";
import {ActionType, StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

let mapStateToProps = (state: StateType) => {
    return {
        dialoguesPage: state.dialoguesPage
    };
};
let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        changeNewMessageTextCallback: (messageData: string) => {
            dispatch(changeNewMessageTextAC(messageData))
        },
        sendMessageCallback: () => {
            dispatch(addMessageAC());
        }
    };
};

export const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);