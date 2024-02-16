import React, { useContext } from 'react';
import { PRODUCTS } from '../../../productList';
import { ShopContext } from '../../../Context/ShopContext';
import { HistItem } from './HistItem';
import "./History.css";

export const History = () => {

  const { histItems, deleteFromHist, getTotalHistAmount } = useContext(ShopContext);

  const handleDelete = () => {
    Object.keys(histItems).forEach(productId => {
      if (histItems[productId] > 0) {
        deleteFromHist(productId);
      }
    });
  };

  return (
    <div className="hist">
      <div>
        <h1>My History</h1>
      </div>
      <div className="hist">
        {PRODUCTS.map((product) => {
          if (histItems[product.id] !== 0) {
            return <HistItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      <div>
        {getTotalHistAmount() > 0 ? (
          <div className='checkout'>
            <p>Subtotal: ₺{getTotalHistAmount()}</p>
            <button className='deleteHandler' onClick={handleDelete}>Delete History</button>
          </div>
        ) : (
          <h1>There is No History</h1>
        )}
      </div>
    </div>

  )
}
