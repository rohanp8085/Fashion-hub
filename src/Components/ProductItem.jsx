import React, { useContext } from 'react'
import CartContext from '../Context/cart/CartContext'
import { BsHeartFill } from "react-icons/bs";


const ProductItem = ({product}) => {
  const {id , title , price , image} = product

  const {dispatch} = useContext(CartContext)

  const handleClick =() =>{
    dispatch({
      type : "ADD_CART",
      payload : product
    })
  }
  return ( 
   
    <div className="product-item" data-aos="zoom-in">
      <span className='heart'><button className='heart-btn'><BsHeartFill className='heart-icon'/></button></span>
    <img className='product-image' src={image} alt=""/>
    <h4>{title}</h4>
    <h3>$:{price}</h3>
    <a href="#cartbtn"><button className='addcart-btn' onClick={()=>handleClick()}>Add to cart</button></a>
    
  </div>
  )
}

export default ProductItem
