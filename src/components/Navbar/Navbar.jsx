import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import n from './Navbar.module.css';

const Navbar = (props) => {
    
   
    let links = props.links.map(l => <NavLink key={l.id} to={l.to}>{l.name}</NavLink>);
    let friends = props.friends.map(f => f.online ?  <span key={f.id} className={n.online}>{f.name}</span>
         :  <span key={f.id} className={n.offline}>{f.name}</span>);


    
    let addFriend = () => {
        props.addFriend();
    };
    let updateFriend = (e) => {
        props.updateFriend(e.target.value);
    };
    
    return (
        <nav className={n.item}>
            { links }
            <div><span>Friends</span></div>
            <div className={n.friends}>{ friends }</div>
            <div className={n.addFriend}>
           <textarea placeholder="Add new friend..." onChange={updateFriend} value={props.newFriendText}></textarea> 
           <button onClick={addFriend}>Add friend</button>
            </div>
        </nav>
    );
}

export default Navbar;