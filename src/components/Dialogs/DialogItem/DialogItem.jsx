import React from 'react';
import d from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;

    return (
        <div className={d.dialog}><NavLink to={path}><img src={props.icon} alt="-ICON-"/>{props.name}</NavLink></div>
    )
}

export default DialogItem;