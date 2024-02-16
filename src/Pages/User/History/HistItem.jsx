import React, { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext.jsx";
import "./History.css";

export const HistItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {histItems} = useContext(ShopContext);
    const purchasedAmount = histItems[id];

    return (
        <div className='histItem'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>Quantity: {purchasedAmount}</p>
                <p>Total Price: ₺{purchasedAmount * price}</p>
            </div>
        </div>
    )
}