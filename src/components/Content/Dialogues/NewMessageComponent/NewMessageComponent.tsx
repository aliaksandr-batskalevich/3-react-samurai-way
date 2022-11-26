import React, {KeyboardEvent, useState} from 'react';
import s from './NewMessageComponent.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../commons/Forms/Textarea/Textarea";
import {maxValue} from "../../../../utilities/validators";

export type FormDataType = {
    newMessageText: string
}
type iPropsType = {
    onSubmit: (data: FormDataType) => void
}

const maxValue100 = maxValue(100);

const NewMessageComponent: React.FC<InjectedFormProps<FormDataType & iPropsType>> = ({handleSubmit}) => {

    const [error, setError] = useState<string | undefined>(undefined);

    return (
        <div className={s.newMessageWrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <Field
                    component={Textarea}
                    name={'newMessageText'}
                    validate={[maxValue100]}

                    className={s.textarea}
                    placeholder={'Write new message...\nMax length 100 symbols.'}

                    setErrorHandler={setError}
                />
                <button className={s.button}>SEND</button>
            </form>
            <div className={s.errorWrapper}>
                <span>{error}</span>
            </div>
        </div>
    );
};

export default reduxForm<FormDataType & iPropsType>({form: 'newMessage'})(NewMessageComponent)
