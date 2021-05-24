import React, { useState } from 'react';
import styles from './New.module.css';


const New = ({source, author, title, description, url, urlToImage, publishedAt, content, ...rest}) => {
    
    const [mode, setMode] = useState(false);
    return <div className={styles.content}>
        <span>Date: {publishedAt}</span>
        <p>Author: {author}</p>
        <header>Name: {title}</header>
        <img src={urlToImage} alt="img"/>
        { !mode ?
        <p className={styles.description} onClick={() => {setMode(true)}} >Description: {description}</p>
        : <article className={styles.article} onClick={() => {setMode(false)}}>
            Content: {content}
        </article>
        }
        <a href={url}>To origin</a>
    </div>;
}

export default New;