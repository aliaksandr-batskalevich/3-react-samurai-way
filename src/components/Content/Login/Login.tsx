import React from 'react';
import {useSelector} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {AuthDataType} from "../../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

export const Login = () => {

    const {isAuth, id} = useSelector<StateType, AuthDataType>(state => state.authData);

    return (
        isAuth
            ? <Navigate to={`/profile/${id}`}/>
            : <div>
                <h1>LOGIN</h1>
            </div>
    );
};
