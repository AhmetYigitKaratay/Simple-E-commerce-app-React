import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext.jsx";
import "./Cart.css";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, deleteFromCart } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>₺{price} per/kg</p>
                <div className='counthandler'>

                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} // to increase or decrease item number in cart these buttons used 
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
                <button className='deleteHandler' onClick={() => deleteFromCart(id)}>Remove</button>
            </div>

        </div>

    )
}
