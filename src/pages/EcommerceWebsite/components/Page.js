import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { closeMenu } from '../utilities/closeMenu';
import Menu from './Menu';
import Navbar from './Navbar';
import Cart from './Cart';
import Feature from './Feature';
import Banner from './Banner';
import Products from './Products';
import Reserve from './Reserve';
import SearchBlock from './SearchBlock';
import SearchMark from './SearchMark';
import './main.css'


function Page() {
  const location = useLocation()
  useEffect(() => closeMenu())
  document.title = "ayako"
  return (
    <>
      <Menu></Menu>
      <SearchBlock></SearchBlock>
      <div className='page-container'>
        <div className='margin-lr'>
          <Navbar></Navbar>
          <div className='page-inner'>
            <Feature></Feature>
            <Banner></Banner>
            <div className='outlet'>{location.pathname.slice(-11) === 'collections' ?  <Products></Products> : <Outlet></Outlet> }</div>
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

export default Page;