import React from 'react';
import s from './LoginForm.module.css';
import {InjectedFormProps, reduxForm, Field} from 'redux-form'
import {Input} from "../../../commons/Forms/Input/Input";
import {required} from "../../../../utilities/validators";
import {useSelector} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type iPropsType = {
    onSubmit: (data: FormDataType) => void
}

const LoginForm: React.FC<InjectedFormProps<FormDataType & iPropsType>> = (props) => {
    const isAuthing = useSelector<StateType, boolean>(state => state.authData.isAuthing);

    const {handleSubmit, error} = props;

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <Field
                component={Input}
                type="text"
                name={'login'}
                validate={[required]}

                placeholder={'Login'}
            />
            <Field
                component={Input}
                type="text"
                name={'password'}
                validate={[required]}

                placeholder={'Password'}
            />
            <label><Field component={'input'} type="checkbox" name={'rememberMe'}/><span className={s.rememberMe}>Remember me</span></label>
            <button disabled={isAuthing}>Login</button>
            {error && <div className={s.formSummaryError}>{error}</div>}
        </form>
    );
};

export default reduxForm<FormDataType & iPropsType>({form: 'login'})(LoginForm);