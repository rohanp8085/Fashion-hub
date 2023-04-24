import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { add } from '../Features/Slice';


const ProductItem = ({product}) => {

  const dispatch = useDispatch()
  
  const handleAdd = (product) =>{
    dispatch(add(product))
  }
 
  return ( 
   
    <div className="product-item" data-aos="zoom-in">
      {/* <p>Rating :</p> */}
      <span className='heart'><button className='heart-btn'><BsHeartFill className='heart-icon'/></button></span>
    <img className='product-image' src={product.image} alt=""/>
    <h4>{product.title}</h4>
    <h4> Price : $:{product.price}</h4>
    <a href="#cartbtn"><button className='addcart-btn'  onClick={()=>handleAdd(product)}>Add to cart</button></a>
    
  </div>
  )
}

export default ProductItem
