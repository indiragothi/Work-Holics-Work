import React from 'react'
import { useCart } from '../context/Cart'

const Cart = () => {
    const cart = useCart();

    const total = cart.item.reduce((a, b) => a + b.price, 0);

  return (
    <div>
        <h1>CART</h1>
        {cart && cart.item.map(items =>(
            <li>{items.name} - ${items.price}</li>
        ))}

        <h5>Total Bills : ${total}</h5>
      
    </div>
  )
}

export default Cart
