import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h4>order Summery</h4>
            <h4>Selected Item: {cart.length}</h4>
        </div>
    );
};

export default Cart;