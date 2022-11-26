import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './Input.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type WrappedFieldProps = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
}
type CustomPropsType = {}
type InputPropsType = DefaultInputPropsType & WrappedFieldProps & CustomPropsType


export const Input: React.FC<InputPropsType> = ({input, meta, ...props}) => {

    const errorRules = meta.error && meta.touched;

    return (
        <div className={s.inputWrapper}>
            <input
                {...input}
                {...props}

                className={s.input}
            />
            {errorRules && <div className={s.errorWrapper}>
                <div className={s.arrow}>{meta.error}</div>
            </div>}
        </div>
    );
};