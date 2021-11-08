import cl from "./Pagination.module.css"

const Pagination = ({pagesCount, curPage, setPage}) => {

    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++){
        pagesArray.push(i);
    }

  return (
        <div className={cl.wrapper}>
           {
                pagesArray.map(pageNumber => 
                    <div 
                        key={pageNumber}
                        className={curPage === pageNumber ? [cl.page__current, cl.page].join(' ') : cl.page}
                        onClick={e => setPage(pageNumber)}
                    >{pageNumber}</div>)
           }
        </div>
  );
}

export default Pagination;