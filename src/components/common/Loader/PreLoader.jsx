import React from 'react';
import loader from './../../../assets/preLoader.gif';
import s from './PreLoader.module.css';

const PreLoader = (props) => {
    return <div className={s.content}>
        <img src={loader} alt="Loader"/>
    </div>
};

export default PreLoader;