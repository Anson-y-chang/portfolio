import React from 'react';
import { useSearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import styles from './SearchBlock.module.css'

function SearchBlock() {
  const { localSearchParams } = useSearchContext()
  const foundProducts = products.filter(i => i.name.toLocaleLowerCase().indexOf(localSearchParams.toLocaleLowerCase()) !== -1)
  const closeSearch = () => {
    if (document.querySelector('.menu-active')) {
      const pageContainer = document.querySelector('.page-container');
      const cart = document.querySelector('.cart')
      const mark = document.querySelector('.mark')
      const searchBlock = document.querySelector('.search-block')
      const menuSearchMark = document.querySelector('.menu-search-mark')
      pageContainer.classList.remove('menu-active');
      cart.classList.remove('menu-active');
      mark.classList.remove('active');
      searchBlock.classList.remove('menu-active');
      menuSearchMark.classList.remove('active');
    } else {
      const searchMark = document.querySelector('.search-mark')
      const searchBlock = document.querySelector('.search-block')
      searchMark.classList.remove('active')
      searchBlock.classList.remove('active')
    }
  }
  const searchOutput = () => {
    switch (foundProducts.length) {
      // 找不到
      case 0:
        return <>
          <div>Sorry, nothing found for {localSearchParams}.</div>
          <div className={styles.searchLink}>
            <Link to='/ecommerce/search' onClick={() => closeSearch()}>SEE ALL PRODUCTS</Link>
          </div>
        </>
      // 未填寫留空
      case products.length:
        return <></>
      default:
        return <>
          <div>Products</div>
          <div className={styles.searchItems}>
            {foundProducts.slice(0, 3).map(i =>
              <div key={i.id} >
                <img src={require('../img/products/' + i.imgUrl.split('/').slice(-2).join('/'))} alt="" />
                <div>{i.name}</div>
              </div>
            )}
          </div>
          <div className={styles.searchLink}>
            <Link to={`/ecommerce/search?q=${localSearchParams}`} onClick={() => closeSearch()}>SEE All FOUND PRODUCTS</Link>
          </div>
        </>
    }
  }
  return (
    <div className={`search-block ${styles.searchBlock}`}>
      {searchOutput()}
    </div>

  );
}

export default SearchBlock;