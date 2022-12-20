import React from "react";
import {Dialogues} from "./Dialogues";
import {addMessageAC} from "../../../redux/dialogues-reducer";
import {ActionsType, RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../commons/HOKs/withAuthRedirect/withAuthRedirect";
import {getDialoguesPage} from "../../../redux/selectors";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialoguesPage: getDialoguesPage(state),
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

