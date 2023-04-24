import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const cartlength = useSelector(state => state.cart)
  return (
    <nav>
      <ul>
        <Link id='home' to={"/"}><h1 className="fashion-hub">FASHION HUB</h1></Link>
        <Link to={"electronics"}><li><a href="">Electronics</a></li></Link>
        <Link to={"man"}><li><a href="">Man</a></li></Link>
        <Link to={"woman"}><li><a href="">Woman</a></li></Link>
        <Link to={"jewelery"}><li><a href="">Jewelery</a></li></Link>
      </ul>
      <span className="btn-sec">
         <Link to={"wishlist"}><button className="cart-btn"><i className="bi bi-bag-heart"></i> <button className='length-btn'>0</button></button></Link>
        <Link to={"cart"}> <button  className="cart-btn"><i className="bi bi-cart3"></i><button className='length-btn'>{cartlength.length}</button></button></Link>
      </span>
    </nav>
  )
}

export default Navbar
