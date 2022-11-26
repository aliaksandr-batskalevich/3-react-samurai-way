import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {AuthDataType} from "../../../redux/auth-reducer";
import {Profile} from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {
    addLikeToPost,
    addPost,
    getProfileTC,
    ProfilePageType,
    updateStatusTC
} from "../../../redux/profile-reducer";
import {useAppDispatch} from "../../../redux/hooks";
import {withAuthRedirect} from "../../commons/HOKs/withAuthRedirect/withAuthRedirect";
import {compose} from "redux";

const ProfileContainerFC = () => {

    const dispatch = useAppDispatch();
    // const dispatch = useDispatch<ThunkDispatch<StateType, unknown, ActionsType>>();

    const {isAuth, id} = useSelector<StateType, AuthDataType>(state => state.authData);
    const profilePage = useSelector<StateType, ProfilePageType>(state => state.profilePage);

    const params = useParams<{ userId: string }>();
    const isMyAccountPage = id && params.userId ? id === +params.userId : false;

    const addPostHandler = (newPostText: string) => {
        dispatch(addPost(newPostText));
    };
    const addLikeToPostHandler = (id: string) => {
        dispatch(addLikeToPost(id));
    };
    const changeProfileStatusHandler = (newStatus: string) => {
        dispatch(updateStatusTC(newStatus));
    }

    useEffect(() => {

        if (isAuth) {
            params.userId && dispatch(getProfileTC(+params.userId));
            // params.userId && dispatch(getStatusTC(+params.userId));
        }
    }, [params]);

    return (
        isAuth
            ? <Profile
                profilePage={profilePage}
                addPost={addPostHandler}
                addLikeToPost={addLikeToPostHandler}
                changeProfileStatus={changeProfileStatusHandler}
                isMyAccountPage={isMyAccountPage}/>
            : <Navigate to={'/login'}/>
    );
};

export default compose<React.ComponentType>(
    withAuthRedirect
)(ProfileContainerFC);