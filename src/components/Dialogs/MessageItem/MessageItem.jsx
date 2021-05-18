import React from 'react';
import d from './../Dialogs.module.css';

//Поработать здесь и стейт для сообщений


const Message = (props) => {
    return(
        <div className={d.mi}><span className={d.from}>{props.message}</span><br/></div>
    )
}

export default Message;