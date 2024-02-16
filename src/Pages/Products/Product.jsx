import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext.jsx'

export const Product = (props) => {

  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ₺{price} per/kg</p>
      </div>
      <div className='counthandler'>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]} // to increase or decrease item number in cart these buttons used 
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
    </div>
  )
}
