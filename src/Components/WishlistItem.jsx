import React from 'react'

const WishlistItem = () => {
  return (
   <div className="product-item" data-aos="zoom-in">
        
         <span className='heart'><button className='heart-btn'></button></span>
       <img className='product-image' src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt=""/>
       <h4>title</h4>
       <h3>$:price</h3>
       <a href="#cartbtn"><button className='addcart-btn' >Remove</button></a>

     </div>
  )
}

export default WishlistItem
