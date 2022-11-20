import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const granTotal = total + shipping + parseFloat(tax)
    return (
        <div className='cart'>
            <h2>order Summery</h2>
            <p>Selected Item: {quantity}</p>
            <p>Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${(granTotal).toFixed(2)}</h4>
        </div>
    );
};

export default Cart;