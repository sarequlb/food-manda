import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h1>Foood are here</h1>
                <p>sleected item {cart.length}</p>
        </div>
    );
};

export default Cart;