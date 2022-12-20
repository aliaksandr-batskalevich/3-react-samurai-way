import React from "react";
import {connect} from "react-redux";
import {ActionsType, RootStateType} from "../../../redux/redux-store";
import {SideBar} from "./SideBar";
import {Dispatch} from "redux";
import {getFriendsPage} from "../../../redux/selectors";

let mapStateToProps = (state: RootStateType) => {
    return {
        friendsPage: getFriendsPage(state),
    }
};
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {

    }
};

export const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);
