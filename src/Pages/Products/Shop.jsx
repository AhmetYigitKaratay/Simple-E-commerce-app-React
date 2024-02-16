import React from 'react'
import { PRODUCTS } from "../../productList.js";
import { Product } from "./Product.jsx"
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className="products">
        {PRODUCTS.map((product) => ( //Display all products
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}
