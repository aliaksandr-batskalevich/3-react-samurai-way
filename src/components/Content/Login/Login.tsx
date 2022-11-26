import React from 'react';
import {useSelector} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {AuthDataType, loginTC} from "../../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import LoginForm, {FormDataType} from "./LoginForm/LoginForm";
import {useAppDispatch} from "../../../redux/hooks";
import s from './Login.module.css'

export const Login = () => {

    const {isAuth, id} = useSelector<StateType, AuthDataType>(state => state.authData);
    const dispatch = useAppDispatch();

    const onSubmitHandler = (data: FormDataType) => {
        data.login && data.password
        && dispatch(loginTC(data.login, data.password, data.rememberMe ? data.rememberMe : false, true));
    }

    return (
        isAuth && id
            ? <Navigate to={`/profile/${id}`}/>
            : <div className={s.loginWrapper}>
                <h1 className={s.title}>LOGIN</h1>
                <div className={s.loginFormWrapper}>
                    <LoginForm onSubmit={onSubmitHandler}/>
                    <p className={s.context}>
                        To test the application, you can use the test account.<br/>Login: <span
                        className={s.contextValue}>free@samuraijs.com</span><br/>Password: <span
                        className={s.contextValue}>free</span>
                    </p>
                </div>
            </div>
    );
};
