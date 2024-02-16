import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, ClockCounterClockwise } from 'phosphor-react';
import "./Navbar.css";


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <div className="logo-wrapper">
          <Link className="logo" to="/">E-greengrocer</Link>
        </div>
        <div className="login-wrapper">
          <Link to="/login">Log In</Link>
        </div>
        <div className="cart-wrapper">
          <Link to="/cart">
            <ShoppingCart size={32}></ShoppingCart>
          </Link>
        </div>
        <div className="history-wrapper">
          <Link to="/history">
            <ClockCounterClockwise size={32}></ClockCounterClockwise >
          </Link>
        </div>
        <div className="user-wrapper">
          <Link to="/user">
            <User size={32}></User>
          </Link>
        </div>
      </div>
    </div>
  )
}
