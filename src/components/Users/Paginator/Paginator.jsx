import React, { useState } from 'react';
import s from './Paginator.module.css';


const Paginator = ({ onPageChanger, currentPage, itemsCount, pageSize, portionSize}) => {
        
        let pages = [];
        const pagesCount = Math.ceil(itemsCount / pageSize);
        for (let i = 1; i <= pagesCount; i++)
            pages.push(i);

    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / 5));

    
    
    const portionsCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>

        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Back</button>}
        { pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
        return <span key={p} onClick={(e) => {onPageChanger(p)}}
            className={currentPage === p ? s.selectedPage : s.unselectedPage}>{p}</span>})}
        {portionNumber < portionsCount && 
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}

    </div>
};

export default Paginator;