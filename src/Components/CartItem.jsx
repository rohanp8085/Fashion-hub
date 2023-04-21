import React, { useContext } from 'react'
import CartContext from '../Context/cart/CartContext';

const CartItem = ({cartitem}) => {

    const {dispatch} = useContext(CartContext)

    const handleRemove = (id) =>{
     dispatch({
        type : "REMOVE",
        payload : id
     })
    }


  return (
            <div className="cart-item">
        <img className='cart-image' src={cartitem.image} alt=""/>
       <span>
        <h4>{cartitem.title}</h4>
        <h3>Rate : ${cartitem.price}</h3>
        <h3>Qty : 1</h3>
       </span>
       <button className="remove-btn" onClick={()=>handleRemove(cartitem.id)}>Remove Item</button>
    </div>
  
  )
}

export default CartItem
