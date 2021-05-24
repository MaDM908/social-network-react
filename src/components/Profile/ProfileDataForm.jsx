import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from '../common/FormControls/FormControls';
import p from './Profile.module.css';


const ProfileDataForm = (props) => {

return <div><form onSubmit={props.handleSubmit}>
    <button>Save</button>
<div>
    { props.error && <div className={p.form + ' ' + p.error}>{props.error}</div>}
</div>
<div>
    <b>Name: </b>
    {createField("", "fullName", [], Input, "text")}
</div>
<div>
    <b>About me: </b>
    {createField("", "aboutMe", [], Input, "text")}
</div>
<div>
    <div><b>Трудоустроен: </b>
        {createField("", "lookingForAJob", [], Input, "checkbox")}
        <b>Описание работы:</b>
        {createField("", "lookingForAJobDescription", [], TextArea, "")}
    </div>
</div>
<div>
    <b>Контакты:</b>
    <div>
        { Object.keys(props.contacts).map(key => 
        <div className={p.contact}>
            <b>{key}: </b>
            {createField(`Enter ${key} url`, `contacts.${key}`, [], Input, "text")}
            <div>
                { props.error && <div className={p.form + ' ' + p.error}>{props.error}</div> }
            </div>
        </div>)
        }
    </div>
</div>

</form></div>
};

//Осталось разобраться с default для description и _subscribe_ для profile
const Wrapper = (props) => {
    const ProfileDataReduxForm = reduxForm({form: "profileData", initialValues: {...props.profile}})(ProfileDataForm)
    return <ProfileDataReduxForm {...props}/>
}

export default Wrapper;