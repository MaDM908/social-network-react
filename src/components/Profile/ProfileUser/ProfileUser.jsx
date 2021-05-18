import React, { useState } from 'react';
import p from './ProfileUser.module.css';


const ProfileUser = (props) => {
    const avatarHandler = (e) => {
        
        if(e.target.files.length)
            props.savePhoto(e.target.files[0]);
    };


    const [mode, setMode] = useState(false);
    const turnMode = (e) => {
        setMode(!mode);
    };
    const disableMode = (e) => {
        setMode(!mode)
    };

    return (
        <div className={p.contentItem}>
        <div className={p.avatar}>
        <img src={props.photo} onMouseOver={turnMode}  alt="Avatar" />
        {props.isOwner && mode &&     
            <input type="file" onChange={avatarHandler} onMouseLeave={disableMode} className={p.fileButton}/>
        }
        </div>             
        </div>
    );
}

export default ProfileUser;