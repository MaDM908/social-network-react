import React from 'react';
import Post from './Post/Post';
import m from './MyPosts.module.css';

const MyPosts = (props) => {


    let posts = props.posts.map(p => <Post key={p.id} name={p.name} likes={p.likes} id={p.id}/>);

    return(
        <div className={m.content}> 
            { posts }
        </div>
    )
}

export default MyPosts;