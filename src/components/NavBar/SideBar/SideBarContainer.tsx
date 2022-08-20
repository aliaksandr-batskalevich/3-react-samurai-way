import React from "react";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../../redux/redux-store";
import {SideBar} from "./SideBar";
import {Dispatch} from "redux";

let mapStateToProps = (state: StateType) => {
    return {
        friendsPage: state.friendsPage
    }
};
let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {

    }
};

export const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);
