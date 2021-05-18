import React from 'react';
import PreLoader from '../common/Loader/PreLoader';
import s from './Header.module.css'; 
import icon from './../../assets/icon.jpg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import unknown from './../../assets/userUnknown.jpg';
import cn from 'classnames';

const Header = (props) => {
    if(props.isFetching){
        return (
        <div className={cn(s.item)}>
            <img src={icon} alt=""/>
            <div className={cn(s.auth)}>
                <PreLoader className={cn(s.loader)}/>
            </div>
        </div>
        );
    } else {
    return (
        <div className={cn(s.item)}>
            <img src={icon} alt=""/>
            <div className={cn(s.auth)}>
                <div>
                    { props.isAuth
                    ? <div><span>{ props.login }</span><button onClick={props.logoutThunk}>Logout</button></div>
                    : <NavLink to={'./login'}>LOGIN</NavLink> }
                </div>
                <div>
                    { props.isAuth
                    ? <img src={ props.icon || unknown } alt="icon"/> 
                    : <img src="https://data.whicdn.com/images/335116356/original.jpg?t=1568158252" alt="icon"/> }
                </div>
            </div>
        </div>
    );
    }
}

export default Header;