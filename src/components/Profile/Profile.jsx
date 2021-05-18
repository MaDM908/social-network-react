import React, { useState } from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileUser from './ProfileUser/ProfileUser';
import unknown from './../../assets/userUnknown.jpg';
import AddPostForm from './AddPostForm';
import ProfileStatusHooked from './ProfileStatusHooked';
import ProfileDataForm from './ProfileDataForm';

const Contacts = (props) => {
    return Object.keys(props.contacts).map(key => {
        return <div className={p.contact} key={key}>
            <b>{key}: </b>
            <a href={"http://" + props.contacts[key]}>{props.contacts[key]}</a>
        </div>
    })
};

const Profile = (props) => {
    
    const [editMode, setMode] = useState(false);

    const onSubmitPosts = (data) => {
        props.addPost(data.newPostDesc);
    };
    const onSubmit = (data) => {
        console.log(data);

        props.editProfile(data)
        .then((res) => {
            if(res)
            setMode(true)
            if(!res)
            setMode(false)

        })
    };

 
    return (
        <div className={p.content}>
            <ProfileUser
                photo={props.profile.photos.large !== null ? props.profile.photos.large : unknown}
                savePhoto={props.isOwner ? props.savePhoto : null}
                updateStatus={props.isOwner ? props.updateStatus : null}
                isOwner={props.isOwner} />

            { !props.error && !editMode ? 
                <div>
                    {props.isOwner && <div>
                        <button onClick={() => { setMode(true) }}>Edit</button>
                    </div>}

                    <div>
                        <b>Name: </b><span>{props.profile.fullName}</span>
                    </div>
                    <div>
                        <b>About me: </b><span>{props.profile.aboutMe}</span>
                    </div>
                    <div>
                        <div><b>Трудоустроен: </b>
                            {
                                props.profile.lookingForAJob
                                    ?
                                    <div>
                                        <span>Да</span>
                                        <div>
                                            <b>Описание работы: </b>
                                            <p>{props.profile.lookingForAJobDescription}</p>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <span>Нет</span>
                                    </div>
                            }
                        </div>
                    </div>
                    <div>
                        <b>Контакты:</b>
                        <div>
                            <Contacts contacts={props.profile.contacts} />
                        </div>
                    </div>


                </div>

                : <ProfileDataForm onSubmit={onSubmit} {...props} />
            }
            <ProfileStatusHooked status={props.status} isOwner={props.isOwner}
                updateStatus={props.isOwner ? props.updateStatus : null} />
        </div>
    )
};



export default Profile;



// <div>
//           {
//             props.isOwner &&
//             <div>
//                 <AddPostForm onSubmit={onSubmit} />
//                 <div>
//                     <MyPosts posts={props.posts} />
//                 </div>
//             </div>
//         }  
//         </div>