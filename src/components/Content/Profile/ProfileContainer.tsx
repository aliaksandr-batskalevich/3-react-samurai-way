import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ActionType, StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addLikeToPostAC, addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
};
let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        changeNewPostText: (textData: string) => {
            dispatch(changeNewPostTextAC(textData));
        },
        addPost: () => {
            dispatch(addPostAC());
        },
        addLikeToPost: (id: string) => {
            dispatch(addLikeToPostAC(id));
        }
    };
};

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)