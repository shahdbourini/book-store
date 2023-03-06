import React,{useRef} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { insertBook } from '../store/bookSlice';

const Addform = () => {
  const dispatch = useDispatch();
  const {isloggedin} = useSelector((state) => state.auth);

  const books = useSelector((state) => state.books);
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
     title: titleRef.current.value,
      price: priceRef.current.value,
      discription: descriptionRef.current.value,
    };
    dispatch(insertBook(book));

    titleRef.current.value = '';
    priceRef.current.value = '';
    descriptionRef.current.value = '';
  };
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required  ref={titleRef}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={priceRef}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              ref={descriptionRef}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled= {!isloggedin} >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
