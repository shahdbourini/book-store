import React from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import {loginOut} from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const {isloggedin} = useSelector((state) => state.auth);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(isloggedin)
    dispatch(loginOut());
  };
 
  const {error} = useSelector(state => state.books)

  return (
    <>
    {error && <div className='alert alert-danger mb-0' role='alert'>Error: {error}</div>}
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit' onClick={handleLogin}>
        {isloggedin ? 'Logout' : 'Login'}
      </button>
    </nav>
    </>
  );
};

export default Header;
