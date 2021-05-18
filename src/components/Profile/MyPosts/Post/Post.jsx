import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div><img src="https://www.flaticon.com/premium-icon/icons/svg/3629/3629832.svg" alt=""/> 
            {props.id}: {props.name}</div>
            <div>Likes: {props.likes}</div>
        </div>
    );
}

export default Post;