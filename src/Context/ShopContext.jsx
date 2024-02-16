import React, { createContext } from 'react'
import { useState } from 'react'
import { PRODUCTS } from '../productList'

export const ShopContext = createContext(null)

// Get the default apperence of the cart
const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}
// Get the default apperence of the history 
const getDefaultHist = () => {
  let hist = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    hist[i] = 0;
  }
  return hist;
}
export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [histItems, setHistItems] = useState(getDefaultHist());


  // To get the total amount of the cart 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };


  // To get the total amount of the of the shopping history
  const getTotalHistAmount = () => {
    let totalAmount = 0;
    for (const item in histItems) {
      if (histItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += histItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const addToHist = (itemId) => {
    setHistItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  };

  const deleteFromHist = (itemId) => {
    setHistItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
  };

  const deleteCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
  };


  // the constants to use the context values in other components
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    addToHist,
    deleteFromHist,
    deleteCart,
    getTotalHistAmount,
    histItems
  }


  //component providing context to children
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}</ShopContext.Provider>
  )
}
