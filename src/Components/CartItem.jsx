import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../Features/Slice'

const CartItem = ({item}) => {
  // console.log(item);

  const dispatch = useDispatch()

  const handleRemove = (id) =>{
       dispatch(remove(id))
  }



  return (
            <div className="cart-item">
        <img className='cart-image' src={item.image} alt=""/>
       <span>
        <h4>{item.title}</h4>
        <h3>Rate : ${item.price}</h3>
        <h3>Qty : 1</h3>
       </span>
       <button className="remove-btn" onClick={()=>handleRemove(item.id)} >Remove Item</button>
    </div>
  
  )
}

export default CartItem
