import React from 'react'
import { BsHeartFill  } from "react-icons/bs";
import WishlistItem from './Components/WishlistItem';

const WishList = () => {

 
  return (
    
  <>
  <span id='wish'><h1 className='wish'>Favourite</h1></span>

  <div className='product-container'>
       
       <WishlistItem/>

      </div>
  </>
   

  )
}

export default WishList
