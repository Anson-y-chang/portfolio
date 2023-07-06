import { createContext, useState, useContext } from "react";

const CartContext = createContext({})
export const useCartContext = () => {
  return useContext(CartContext)
} 


export const CartContextProvider = ( {children} ) => {
  const [cartItems, setCartItems] = useState([])
  const increaseCartItem = (id) => {
    if (cartItems.find(i => i.id === id) == null) {
      setCartItems([...cartItems, {id, quantity: 1}])
    } else {
      setCartItems(cartItems.map(i => {
        if (i.id === id) {
          return {...i, quantity: i.quantity + 1}
        } else {
          return i
        }
      }))
    }
  }
  const decreaseCartItem = (id) => {
    if (cartItems.find(i => i.id === id).quantity === 1) {
      setCartItems(cartItems.filter(i => i.id!==id))
    } else {
      setCartItems(cartItems.map(cur => {
        if (cur.id === id) {
          return {...cur, quantity: cur.quantity - 1}
        } else {
          return cur
        }
      }))
    }
  }
  const removeCartItem = (id) => {
    setCartItems(cartItems.filter(i => i.id!==id))
  }

  return  <CartContext.Provider value={{cartItems, increaseCartItem, decreaseCartItem, removeCartItem}}>
            {children} 
          </CartContext.Provider>
} 