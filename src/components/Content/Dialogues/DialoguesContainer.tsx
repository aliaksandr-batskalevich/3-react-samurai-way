import React from "react";
import {Dialogues} from "./Dialogues";
import {addMessageAC, changeNewMessageTextAC} from "../../../redux/dialogues-reducer";
import {ActionsType, StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../commons/HOKs/withAuthRedirect/withAuthRedirect";

let mapStateToProps = (state: StateType) => {
    return {
        dialoguesPage: state.dialoguesPage
    };
};
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        changeNewMessageTextCallback: (messageData: string) => {
            dispatch(changeNewMessageTextAC(messageData))
        },
        sendMessageCallback: () => {
            dispatch(addMessageAC());
        }
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogues);

