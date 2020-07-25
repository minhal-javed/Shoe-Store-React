import React,{useState,useContext} from 'react';
import Menu from '../images/bars-solid.svg';
import CartIcon from '../images/cart.svg';
import Close from '../images/times-solid.svg';
import {Link} from 'react-router-dom';
import './Header.css'
import {DataContext} from '../Context/GlobalContext'
import logo1 from '../images/logo1.png'

export const Header = ()=>{
    const [toggled,setToggled]=useState(false)
    const {cart} =useContext(DataContext)

    const menuToggle = () => setToggled(!toggled);

    return (
      <header>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} alt="menu" width="20" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">
              <img src={logo1} style={{width:'100px'}}></img>
            </Link>
          </h1>
        </div>
        <nav>
          <ul className={toggled ? "toggled" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li className="close" onClick={menuToggle}>
              <img src={Close} width="20" alt="close" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
                    <Link to="/cart">
              <img src={CartIcon} alt="cart-icon" width="20" />
            </Link>
          </div>
        </nav>
      </header>
    );
}