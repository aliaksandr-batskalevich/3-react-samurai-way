import React from 'react';
import s from './LoginForm.module.css';
import {InjectedFormProps, reduxForm, Field} from 'redux-form'

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type iPropsType = {
    onSubmit: (data: FormDataType) => void
}


const LoginForm: React.FC<InjectedFormProps<FormDataType & iPropsType>> = (props) => {
    const {handleSubmit} = props;
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <Field component={'input'} type="text" name={'login'} placeholder={'Login'}/>
            <Field component={'input'} type="text" name={'password'} placeholder={'Password'}/>
            <label><Field component={'input'} type="checkbox" name={'rememberMe'}/> Remember me</label>
            <button>Login</button>
        </form>
    );
};

export default reduxForm<FormDataType & iPropsType>({form: 'login'})(LoginForm);