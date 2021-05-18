import React, {useState, useEffect} from 'react';

const ProfileStatusHooked = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const editModeDisable = (e) => {
        if(props.isOwner)
        setEditMode(false);
        if(props.status !== e.target.value)
        props.updateStatus(status);
    };
    const editModeEnable = () => {
        if(props.isOwner)
        setEditMode(true);
    };
    const changeStatusHandler = (e) => {
        if(props.isOwner)
        setStatus(e.target.value);
    };

    return <div>
        
        {editMode && 
        <div>
            <b>Status: </b>
            <input onBlur={editModeDisable} onChange={changeStatusHandler}
            autoFocus={true} type="Status" value={status}/>
        </div>
        }
        {!editMode &&
        <div>
            <b>Status: </b>
            <span onDoubleClick={editModeEnable}>{status}</span>
        </div>
        }
    </div>;
}

export default ProfileStatusHooked;