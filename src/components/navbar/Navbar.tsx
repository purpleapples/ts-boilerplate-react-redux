import * as React from 'react';
import dateFormat from 'dateformat';
import styles from './Navbar.module.css';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import { toggleModal } from '../modals/modalSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';


const Navbar = (): JSX.Element => {
  console.log(styles.container);
  console.log(styles.count);
  const dispatch = useAppDispatch();  
  const onToggleModal = () => dispatch(toggleModal());

  const renderDisplayDate = (): string => {
    const today = Date.now();
    return dateFormat(today, 'mmmm dS');
  };

// 화면 만들기
// Home recoile, 저 타일
// form
// nav 쪽에는 nav 만 있도록 router 쪽에는 router 만 : router는 body가 됨
  return (      
      <nav className={styles.container}>
      <Link to='/'>Home</Link>      
      <Link to='login'>Login</Link>
      <Link to='board'>board</Link>
      <Link to='board/add'>register record</Link>
      
      {/* <Link to="/"> Home</Link>
      <Link to="/"> Home</Link> */}
      
      </nav>
    
  );
};

export default Navbar;
