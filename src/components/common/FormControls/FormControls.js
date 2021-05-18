import React from 'react';
import { Field } from 'redux-form';
import s from './FormControls.module.css';

const FormArea = ({ ...props }) => {
    const hasError = props.touched && props.error;
    return <div className={hasError ? s.formControl + ' ' + s.error : s.formControl}>
        {props.children}
        {hasError && <div className={s.formControl + ' ' + s.error}><span>{props.error}</span></div>}
    </div>;
}

export const TextArea = ({ input, meta, ...props }) => {
    return <FormArea {...meta}><textarea {...input} {...props}></textarea></FormArea>;
};

export const Input = ({ input, meta, ...props }) => {
    return <FormArea {...meta}><input {...input} {...props} /></FormArea>;
};


export const createField = (placeholder, name, validate, component, ...restProps) => {
    
    return <Field placeholder={placeholder} name={name}
        validate={validate} type={restProps[0]}
        component={component} />
};