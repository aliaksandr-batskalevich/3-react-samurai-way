import React from "react";
import {Dialogues} from "./Dialogues";
import {addMessageAC} from "../../../redux/dialogues-reducer";
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
        sendMessageCallback: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText));
        }
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogues);

