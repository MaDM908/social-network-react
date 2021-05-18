import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validators/validators';
import { TextArea } from '../common/FormControls/FormControls';

const maxLength10 = maxLength(10);

const AddPostForm = (props) => {
    
    return <form onSubmit={ props.handleSubmit }>
    <Field component={TextArea} name="newPostDesc" 
    placeholder="Add new post..." validate={[ required, maxLength10 ]}/>
     <button>Add post</button>
    </form>;
};

export default reduxForm({ form: "posts" })(AddPostForm);
