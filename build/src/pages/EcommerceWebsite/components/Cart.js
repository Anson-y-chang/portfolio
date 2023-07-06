import React from 'react';
// import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import products from '../data/products.json';
import formatCurrency from '../utilities/CurrenyFormartor';
import styles from './Cart.module.css'

function Cart() {
  const { cartItems, increaseCartItem, decreaseCartItem, removeCartItem } = useCartContext()
  const closeCart = () => {
    const pageContainer = document.querySelector('.page-container');
    const cart = document.querySelector('.cart');
    const menu = document.querySelector('.menu');
    const mark = document.querySelector('.mark')
    pageContainer.classList.remove('cart-active');
    cart.classList.remove('active');
    menu.classList.remove('cart-active');
    mark.classList.remove('active');
  }
  
  return (
    <div className={`cart ${styles.cart}`} >
      <div className={styles.cartBack} onClick={() => closeCart()}>
          <svg className={styles.cartBackSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
          <span>Continue Shopping</span>
      </div>
      { cartItems.length === 0 ? <div className={styles.cartEmpty}>Your Cart is Empty</div> : 
      <>
        <div className={styles.cartItems}>
        {cartItems.map(i => 
          <div key={i.id} className={styles.cartItemContainer}>
            <img className={styles.cartImg} src={require('../img/products/' + products.find(cur => cur.id === i.id).imgUrl.split('/').slice(-2).join('/'))} alt="" />
            <div className={styles.cartItemInfo}>
              <div>{products.find(cur => cur.id === i.id).name}</div>
              <div>{formatCurrency(products.find(cur => cur.id === i.id).price)}</div>
              <div>
                <span>Item total: </span>
                <span>{formatCurrency(products.find(cur => cur.id === i.id).price * i.quantity)}</span>
              </div>
              <div className={styles.cartItemHandle}>
                <div className={styles.cartItemNumber}>
                  <button onClick={() => decreaseCartItem(i.id)}>-</button>
                  <div>{i.quantity}</div>
                  <button onClick={() => increaseCartItem(i.id)}>+</button>
                </div>
                <button onClick={() => removeCartItem(i.id)}>
                  <svg style={{fill: 'grey'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
        <div className={styles.subtotal}>
          <span>SUBTOTAL </span>
          <span>{formatCurrency(cartItems.reduce((acc,cur) => acc + products.find(findcur => findcur.id === cur.id).price*cur.quantity,0))}</span>
        </div>
        <div className={styles.checkout}>
          {/* <Link to='/ecommerce/checkouts'>CHECKOUT</Link> */}
          <div>CHECKOUT</div>
        </div>
      </>
      }
    </div>

  );
}

export default Cart;