import React, { useContext } from 'react'
import CartItem from './Components/CartItem'
import CartContext from './Context/cart/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)

    const total = cart.reduce((p,c)=>{
         return p + c.price
    },0)
  
  return (
   <div className="cart-container">
    <div className="cart-items">
    {
      cart.map(cartitem => <CartItem key={cartitem.id} cartitem={cartitem}/>)
    }
   </div>
  <div className="bill-section">
    <h3>Total Amount : <br/> <br/> ${total}</h3>
    <button className="pay-btn">Pay Now</button>
</div>
   </div>
  )
}

export default Cart
