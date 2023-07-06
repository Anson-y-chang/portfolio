import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import styles from './Navbar.module.css'


function Navbar() {
  const location = useLocation()
  const openMenu = () => {
    const menu = document.querySelector('.menu')
    const cart = document.querySelector('.cart')
    const pageContainer = document.querySelector('.page-container')
    const mark = document.querySelector('.mark')
    if (!document.querySelector('.menu-active')){
      menu.classList.add('active')
      cart.classList.add('menu-active')
      pageContainer.classList.add('menu-active')
      mark.classList.add('active')
    }
  }
  const toggleSearch = () => {
    if (document.querySelector('.search-mark.active')) {
      const searchMark = document.querySelector('.search-mark')
      const searchBlock = document.querySelector('.search-block')
      searchMark.classList.remove('active')
      searchBlock.classList.remove('active')
    } else {
      const searchMark = document.querySelector('.search-mark')
      searchMark.classList.add('active')
    }
  }
  const closeSearch = () => {
    if (document.querySelector('.search-mark.active')) {
    const searchMark = document.querySelector('.search-mark')
    const searchBlock = document.querySelector('.search-block')
    searchMark.classList.remove('active')
    searchBlock.classList.remove('active')
  }
  }
  const openCartAndCloseSearch = () => {
    const menu = document.querySelector('.menu')
    const pageContainer = document.querySelector('.page-container')
    const mark = document.querySelector('.mark')
    menu.classList.add('cart-active')
    pageContainer.classList.add('cart-active')
    mark.classList.add('active')
    if (document.querySelector('.search-mark.active')) {
      const searchMark = document.querySelector('.search-mark')
      const searchBlock = document.querySelector('.search-block')
      searchMark.classList.remove('active')
      searchBlock.classList.remove('active')
    }
  }
  const { cartItems } = useCartContext()

  return (
    <div className={`${styles.navbar} ${location.pathname.split('/').length === 2 ? `${styles.navbarHome}` : ''}`}>
      <div className={styles.menuToggle}>
        <button onClick={() => openMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          <span>Menu</span>
        </button>
      </div>
      <div className={styles.logo}>
        <Link to='/ecommerce'>ayako</Link>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link onClick={() => closeSearch()} to='/ecommerce/collections/new-arrivals'>New Arrivals</Link>
          </li>
          <li>
            <Link onClick={() => closeSearch()} to='/ecommerce/collections/home-bath'>Home + Bath</Link>
          </li>
          <li>
            <Link onClick={() => closeSearch()} to='/ecommerce/collections/kitchen-dinning'>Kitchen + Dinning</Link>
          </li>
          <li>
            <Link onClick={() => closeSearch()} to='/ecommerce/collections/office-craft'>Office + Craft</Link>
          </li>
          <li>
            <Link onClick={() => closeSearch()} to='/ecommerce/collections/personal-goods'>Personal Goods</Link>
          </li>
          <li>
            <button onClick={() => toggleSearch()}>
              <svg className='navigation-search' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>
          </li>
          <li>
            <button onClick={() => openCartAndCloseSearch()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              { cartItems.length>0 ? <div>{cartItems.reduce((acc,cur) => (acc+cur.quantity),0)}</div> : '' }
              <span>Cart</span>
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.cartToggle}>
        <button onClick={() => openCartAndCloseSearch()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
          { cartItems.length>0 ? <span>{cartItems.reduce((acc,cur) => (acc+cur.quantity),0)}</span> : '' }
        </button>
      </div>
    </div>
  );
}


export default Navbar;