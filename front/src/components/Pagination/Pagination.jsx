import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  const [activeButton, setActiveButton] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const setPageNumberActive = (e, number) => {
    e.preventDefault()
    setActiveButton(number);
    paginate(number);
  };

  return (
    <nav>
      <ul className="pagination" style={{ marginTop: '1rem' }}>
        {pageNumbers.map((number) => (
          <li key={number} className={activeButton === number ? 'page-item active' : 'page-item'}>
            <div onClick={(e)=>{
              setPageNumberActive(e,number)
              }}
               className="page-link" style={{ cursor: 'pointer' }}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
