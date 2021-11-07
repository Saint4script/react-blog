import React, { Children } from 'react';

import cl from "./SearchModal.module.css"

const SearchModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.FilterSearchModal]

    if(visible) {
        rootClasses.push(cl.active);
    }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.FilterSearchModalContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  );
}

export default SearchModal;