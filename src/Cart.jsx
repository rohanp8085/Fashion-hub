import React from 'react'
import CartItem from './Components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
    
  
const cartlength = useSelector(state => state.cart)
    const total = cartlength.reduce((p,c)=>{
         return p + c.price
    },0)
  
  return (
   <div className="cart-container">
    <div className="cart-items">
   {
    cartlength.map(item => <CartItem key={item.id} item={item}/> )
   }
    
   </div>
  <div className="bill-section">
    <h3 className='total-amount'>Total Amount : <br/> <br/> ${total}</h3>
    <button className="pay-btn">Pay Now</button>
</div>
   </div>
  )
}

export default Cart
