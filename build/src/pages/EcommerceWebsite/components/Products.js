import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import products from '../data/products.json';
import formatCurrency from '../utilities/CurrenyFormartor';
import sortUp from '../utilities/sortUp';
import styles from './Products.module.css';

function Products() {
  // 添加 add to cart 功能
  const { increaseCartItem } = useCartContext();
  // 依照 feature 濾掉不需要的產品
  const location = useLocation();
  const ProductsInPage =  location.pathname.split('/')[3] ? products.filter(i => i.class === location.pathname.split('/')[3]) : products;
  const [searchParams] = useSearchParams();
  // 添加 sort up 功能
  const productsAfterSort = sortUp(ProductsInPage, searchParams.get('sort_by'));

  const finalProducts = searchParams.get('q') ?
    productsAfterSort.filter(i => i.name.toLocaleLowerCase().indexOf(searchParams.get('q').toLocaleLowerCase()) !== -1) : 
    productsAfterSort
  
  return (
    <>
    <div className={styles.contentContainer}>
      {finalProducts
      .map(i => 
      <div className={styles.productContainer} key={i.id}>
        <div className={styles.productImgContainer}>
          <img src={require('../img/products/'+i.imgUrl.split('/').slice(-2).join('/'))} alt="" />
          <button className={styles.addToCart} onClick={() => increaseCartItem(i.id)}>+ Add to Cart</button>
        </div>
        <div>{i.name}</div>
        <div>{formatCurrency(i.price)}</div>
      </div> )
      }
    </div>
    </>
    
  );
}

export default Products;