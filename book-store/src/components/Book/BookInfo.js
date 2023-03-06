import React, { Fragment } from 'react';


const BookInfo = ({info}) => {


  const bookInfo = info.length >0 ? info.map((book) => {
    return (
      <div key ={book.id}>
      <p className='fw-bold'>{book.title}</p>
      <p className='fw-light'>{book.discription}</p>
      <p className='fst-italic'>{book.price}</p>
    </div> 
    )
  }) :
  ' There is no post selected yet. Please select!';



  return (
    <Fragment>
      <h2>Book Details</h2>
      {bookInfo}
    </Fragment>
  );
};

export default BookInfo;
