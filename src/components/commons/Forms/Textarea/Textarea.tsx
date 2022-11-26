import React, {DetailedHTMLProps, TextareaHTMLAttributes, useEffect} from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";
import s from './Textarea.module.css'

type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
type WrappedFieldProps = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
}
type customPropsType = {
    setErrorHandler: (errorValue: string | undefined) => void
}
type TextareaPropsType = DefaultTextareaPropsType & WrappedFieldProps & customPropsType

export const Textarea: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {

    const {className, placeholder, setErrorHandler, ...restProps} = props;

    const errorRules = meta.error && meta.touched;

    useEffect(() => {
        props.setErrorHandler(meta.error);
    }, [errorRules])

    const universalClassName = `${s.textarea} ${className}`;
    const universalPlaceholder = placeholder;

    const errorStyle = errorRules ? {border: 'red solid 2px'} : undefined;

    return (
        <>
            <textarea
                {...input}
                {...restProps}
                className={universalClassName}
                placeholder={universalPlaceholder}
                style={errorStyle}
            />
        </>
    );
};