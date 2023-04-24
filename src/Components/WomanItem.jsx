import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Features/Slice'

const WomanItem = ({manproduct}) => {

    const dispatch = useDispatch()

    const handleman = (manproduct) =>{
        dispatch(add(manproduct))
    }
  return (
    
    <div className="product-item" data-aos="zoom-in">
   
    <span className='heart'><button className='heart-btn'></button></span>
  <img className='product-image' src={manproduct.image}alt=""/>
  <h4>{manproduct.title}</h4>
  <h4> Price : $:{manproduct.price}</h4>
  <a href="#cartbtn"><button className='addcart-btn' onClick={()=>handleman(manproduct)} >Add to cart</button></a>
  
</div>
  )
}

export default WomanItem
