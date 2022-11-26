import React, {useState} from "react";
import s from './NewPost.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxValue} from "../../../../../utilities/validators";
import {Textarea} from "../../../../commons/Forms/Textarea/Textarea";

export type FormDataType = {
    postTextarea: string
}
type iPropsType = {
    onSubmit: (data: FormDataType) => void
}

const maxValue25 = maxValue(25);

const NewPost: React.FC<InjectedFormProps<FormDataType & iPropsType>> = ({handleSubmit}) => {

    const [error, setError] = useState<undefined | string>(undefined);

    return (
        <div className={s.newPostWrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <Field
                    name={'postTextarea'}
                    component={Textarea}
                    validate={[maxValue25]}

                    placeholder={'Create new post...\nMax length 25 symbols.'}
                    className={s.textarea}

                    setErrorHandler={setError}
                />
                <button className={s.addPostButton} disabled={!!error}>post</button>
            </form>
            <div className={s.errorWrapper}>
                {error && <span>{error}</span>}
            </div>
        </div>
    )
}

export default reduxForm<FormDataType & iPropsType>({form: 'newPost'})(NewPost)