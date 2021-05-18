import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validators/validators';
import { TextArea } from '../common/FormControls/FormControls';
import s from './AddDialogForm.module.css';

const maxLength50 = maxLength(50);

const AddDialogForm = (props) => {
    return <div className={s.formContainer}>
        <form onSubmit={props.handleSubmit}>
           <Field component={TextArea} name="newMessageText"
            validate={[ required, maxLength50 ]} />
            <div> <button>Sent</button></div>
            
           
        </form>
    </div>;
}

export default reduxForm({ form: "dialogs" })(AddDialogForm);
