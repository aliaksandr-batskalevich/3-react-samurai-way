import React from 'react';
import s from './LoginForm.module.css';
import Field, { reduxForm } from 'redux-form'

const LoginForm = () => {
    // @ts-ignore
    return (
        <form className={s.form}>
            {/*<Field component={'input'} type="text" placeholder={'Login'}/>*/}
            {/*<Field type="text" placeholder={'Password'}/>*/}
            {/*<Field><input type="checkbox"/>Remember me</Field>*/}
            <button>Login</button>
        </form>
    );
};

export default reduxForm({form: 'login'})(LoginForm);