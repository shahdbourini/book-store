import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {readBook, deleteBook} from '../../store/bookSlice';


const BooksList = ({ isLoading, books }) => {

 const dispatch = useDispatch();
 const {isloggedin} = useSelector((state) => state.auth);

 const handleRead = (id) => {
   dispatch(readBook(id));
 };

 const handleDelete = (id) => {
  dispatch(deleteBook(id));
};

  const booksList = books.length >0 ? books.map((book) => {
    return (
      <li className='list-group-item d-flex  justify-content-between align-items-center' key={book.id}>
        <div>{book.title}</div>
        <div className='btn-group' role='group'>
          <button type='button' className='btn btn-primary' onClick={()=> handleRead(book.id)} disabled= {!isloggedin}>
            Read
          </button>
          <button type='button' className='btn btn-danger'  onClick={()=> handleDelete(book.id)} disabled= {!isloggedin}>
            Delete
          </button>
        </div>
      </li>
    )
  }) : 'there is no book available';

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "loading ..." :
        <ul className='list-group'>
          {booksList}
        </ul>
      }

    </div>
  );
};

export default BooksList;
