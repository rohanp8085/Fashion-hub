import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../Context/cart/CartContext'

const Navbar = () => {

  const {cart} = useContext(CartContext)

  return (
    <nav>
      <ul>
        <Link id='home' to={"/"}><h1 className="fashion-hub">FASHION HUB</h1></Link>
        <li><a href="">New Arrivals</a></li>
        <li><a href="">Man</a></li>
        <li><a href="">Woman</a></li>
        <li><a href="">About</a></li>
      </ul>
      <span className="btn-sec">
         <Link to={"wishlist"}><button className="cart-btn"><i className="bi bi-bag-heart"></i></button></Link>
        <Link to={"cart"}> <button  className="cart-btn"><i className="bi bi-cart3"></i>{cart.length}</button></Link>
      </span>
    </nav>
  )
}

export default Navbar
