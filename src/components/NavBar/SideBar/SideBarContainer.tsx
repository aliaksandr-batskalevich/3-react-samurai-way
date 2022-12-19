import React from "react";
import {connect} from "react-redux";
import {ActionsType, RootStateType} from "../../../redux/redux-store";
import {SideBar} from "./SideBar";
import {Dispatch} from "redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        friendsPage: state.friendsPage
    }
};
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {

    }
};

export const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);
