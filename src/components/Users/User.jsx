import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

const User = ({u, ...props}) => {
    return(
        <span key={u.id} className={s.user}>
            <span>
                <NavLink to={`/Profile/${u.id}`}>
                <div><img className={s.photo} src={u.photos.small !== null ? u.photos.small : "https://w7.pngwing.com/pngs/911/1005/png-transparent-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper-mix.png"}
                alt="icon"/>
                </div>
                </NavLink>
                <div className={s.follow}>
            
                    {
                    u.followed ?
                    <button disabled={ !props.isAuth || props.inFollowingProcess.some(id => id === u.id) } 
                    onClick={() => { props.unfollow(u.id); }}>
                    unfollow
                    </button>
                    : 
                    <button disabled={ !props.isAuth || props.inFollowingProcess.some(id => id === u.id) }
                    onClick={() => { props.follow(u.id); }}>
                    follow
                    </button>
                    }

                </div>
            </span>
            <span className={s.label}>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status ? u.status : "No status yet"}</div>
                </span>
                <span className={s.location}>
                    <div>{u.locationCountry ? u.locationCountry : "World"}</div>
                    <div>{u.locationCity ? u.locationCity : "Unknown city"}</div>
                </span>
            </span>
        </span>
    );
} 

export default User;