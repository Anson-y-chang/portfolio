import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchContext } from '../context/SearchContext';
import closeSearchBlock from '../utilities/closeSearchBlock';
import styles from './Menu.module.css'


function Menu() {
  const closeMenu = () => {  
    const pageContainer = document.querySelector('.page-container');
    const menu = document.querySelector('.menu');
    const mark = document.querySelector('.mark');
    const cart = document.querySelector('.cart');
    pageContainer.classList.remove('menu-active');
    menu.classList.remove('active');
    mark.classList.remove('active');
    cart.classList.remove('menu-active');
  }
  useEffect(() => closeSearchBlock())
  const { localSearchParams, setLocalSearchParams } = useSearchContext()
  // 輸入時彈出search block
  useEffect(() => {
    if (document.querySelector('.menu-active')) {
    if (localSearchParams !== '') {
      const searchBlock = document.querySelector('.search-block')
      const menuSearchMark = document.querySelector('.menu-search-mark')
      searchBlock.classList.add('menu-active')
      menuSearchMark.classList.add('active')
    } else if (localSearchParams === '') {
      const searchBlock = document.querySelector('.search-block')
      const menuSearchMark = document.querySelector('.menu-search-mark')
      searchBlock.classList.remove('menu-active')
      menuSearchMark.classList.remove('active')
    }
  }
  }, [localSearchParams])


  return (
    <>
      <div className={`menu ${styles.menu}`}>
        <ul>
          <li>
            <input type="text" value={localSearchParams} onChange={(e) => {setLocalSearchParams(e.target.value)}} placeholder='Search'/>
            <div>Menu</div>
          </li>
          <li>
            <Link to='/ecommerce/collections/new-arrivals' onClick={()=>closeMenu()}>New Arrivals</Link>
          </li>
          <li>
            <Link to='/ecommerce/collections/home-bath' onClick={()=>closeMenu()}>Home + Bath</Link>
          </li>
          <li>
            <Link to='/ecommerce/collections/kitchen-dinning' onClick={()=>closeMenu()}>Kitchen + Dinning</Link>
          </li>
          <li>
            <Link to='/ecommerce/collections/office-craft' onClick={()=>closeMenu()}>Office + Craft</Link>
          </li>
          <li>
            <Link to='/ecommerce/collections/personal-goods' onClick={()=>closeMenu()}>Personal-Goods</Link>
          </li>
        </ul>
      </div>
      <div className={`menu-search-mark ${styles.menuSearchMark}`}></div>
    </>
  );
}

export default Menu;