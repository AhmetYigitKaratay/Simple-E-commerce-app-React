import React, { useContext } from 'react';
import { PRODUCTS } from '../../productList';
import { ShopContext } from '../../Context/ShopContext';
import { CartItem } from './CartItem';
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

  const { cartItems, getTotalCartAmount, addToHist, deleteCart } = useContext(ShopContext);
  const navigate = useNavigate();


  //a constant  to  use addToHist value, this value adds the orders to history page
  const handleBuy = () => {
    Object.keys(cartItems).forEach(productId => {
      if (cartItems[productId] > 0) {
        addToHist(productId);
      }
    });
  };
  // constant to empty cart right after ordering
  const emptyCart = () => {
    Object.keys(cartItems).forEach(productId => {
      if (cartItems[productId] > 0) {
        deleteCart(productId);
      }
    });
  };

  const showAlert = () => {
    alert('Payment Successful!');
  };

  const navigateToHist = () => {
    navigate("/history");
  };

  return (
    <div className="cart">
      <div>
        <h1>My Bag</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => { // renders CartItem components for products in the cart
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      <div>

        {getTotalCartAmount() > 0 ? ( // a condition to make the bag empty or not
          <div className='checkout'>
            <p>Subtotal: ₺{getTotalCartAmount()}</p>
            <button onClick={() => navigate("/")}>Keep Shopping</button>
            <button onClick={() => {
              emptyCart();
              handleBuy();
              showAlert();
              navigateToHist();
            }}>Buy</button>

          </div>
        ) : (
          <h1>Your Bag is Empty</h1>
        )}
      </div>
    </div>
  );
};
