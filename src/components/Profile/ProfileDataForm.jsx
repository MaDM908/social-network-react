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
        <div className={p.contact}>
            <b>facebook: </b>
            {createField("", "contacts.facebook", [], Input, "text")}
        </div> 
        <div className={p.contact}>
            <b>website: </b>
            {createField("", "contacts.website", [], Input, "text")}
        </div>  
        <div className={p.contact}>
            <b>vk: </b>
            {createField("", "contacts.vk", [], Input, "text")}
        </div>   
        <div className={p.contact}>
            <b>twitter: </b>
            {createField("", "contacts.twitter", [], Input, "text")}
        </div>  
        <div className={p.contact}>
            <b>instagram: </b>
            {createField("", "contacts.instagram", [], Input, "text")}
        </div>  
        <div className={p.contact}>
            <b>youtube: </b>
            {createField("", "contacts.youtube", [], Input, "text")}
        </div>  
        <div className={p.contact}>
            <b>github: </b>
            {createField("", "contacts.github", [], Input, "text")}
        </div>  
        <div className={p.contact}>
            <b>mainLink: </b>
            {createField("", "contacts.mainLink", [], Input, "text")}
        </div>  
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