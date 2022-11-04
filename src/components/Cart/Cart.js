import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total += product.price;
        shipping += product.shipping;
    }
    const tax = (total * 0.1).toFixed(2)
    return (
        <div className='cart'>
            
             <h2>Order Summary</h2>
             <p> checking Selected Items: {cart.length}  </p>
             <p>Total Price: <strong>${total} </strong></p>
             <p>Total Shipping: <strong>${shipping} </strong> </p>
             <p>Tax: <strong>${tax} </strong> </p>
             <p>Grand Total</p>
        </div>
    );
};

export default Cart;