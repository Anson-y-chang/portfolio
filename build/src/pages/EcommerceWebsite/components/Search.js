import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import SearchBlock from './SearchBlock';
import SearchMark from './SearchMark';
import SearchBanner from './SearchBanner';
import Products from './Products';
import Reserve from './Reserve';
import Cart from './Cart';
import { closeMenu } from '../utilities/closeMenu';
import styles from './Search.module.css'

function Search() {
  useEffect(() => closeMenu())

  
  return (
    <>
      <Menu></Menu>
      <SearchBlock></SearchBlock>
      <div className={`page-container ${styles.searchPage}`}>
        <div className='margin-lr'>
          <Navbar></Navbar>
          <div className='page-inner'>
            <SearchBanner></SearchBanner>
            <Products></Products>
            <Reserve></Reserve>
          </div>
        </div>
        <div className='mark'></div>
        <SearchMark></SearchMark>
      </div>
      <Cart></Cart>
    </>
  );
}

export default Search;