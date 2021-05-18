import React from 'react';
import s from './Users.module.css';
import User from './User';
import Paginator from './Paginator/Paginator';


const Users = ({usersCount, pageSize, onPageChanger, currentPage, ...props}) => {  
        
        
        return <div className={s.content}>
        <Paginator itemsCount={usersCount} pageSize={pageSize}
         onPageChanger={onPageChanger} currentPage={currentPage} portionSize={pageSize}
         />
        <div>
            {props.users.map(u => {
                //НЕ самый лучший переход на профиль пользователя. Нужны колбеки из пропсов и работа с BLL!
                return <User u={u} {...props}/>
            })}
        </div>
    </div>
};

export default Users;