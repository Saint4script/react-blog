import React, {useMemo} from 'react';

import MyButton from '../Button/MyButton';
import cl from "./Pagination.module.css"

const Pagination = ({pagesCount}) => {

    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++){
        pagesArray.push(i);
    }

  return (
        <div>
           {
                pagesArray.map(pageNumber => <MyButton key={pageNumber}>{pageNumber}</MyButton>)
           }
        </div>
  );
}

export default Pagination;