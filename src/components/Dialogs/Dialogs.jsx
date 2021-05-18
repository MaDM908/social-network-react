import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import AddDialogForm from './AddDialogForm';

const Dialogs = (props) => {
    
    let dialogs = props.users.map(u => <DialogItem key={u.id} name={u.name} icon={u.icon} id={u.id} />);
    let messages = props.messages.map(m => <MessageItem key={m.id} message={m.message} from={m.from} id={m.id} />);

    let onSubmit = (data) => {
        props.sentMessage(data.newMessageText);
    };
    //Поработать над стилизацией
    //Непонятно как работать с bll у form ответ это не наша компетенция 
    //bll у form нужен только для работы с формами! (Ввод, передача данных и тд)
    return (
        <div className={d.content}>
            <div className={d.dialogs}>
                { dialogs }
            </div>
            <div className={d.messages}>
                { messages }
                <AddDialogForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}




export default Dialogs;