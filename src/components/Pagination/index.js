import React from 'react';
import './index.css'

const Pagination = ({data,pageHandler,pageNum}) => {
    let pageNumbers = []
     for(let i=1; i < Math.ceil(data.length/3)+1; i++){
        pageNumbers.push(i);
     }
    return(
      <div  className="pagination">
          {pageNumbers.map(page => <div className={pageNum === page ? "active" :"pagebutton" } onClick={()=> {pageHandler(page)}}>{page}</div>)}
      </div>
    )
}

export default Pagination