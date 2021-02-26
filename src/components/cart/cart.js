import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, cru) => total + cru.price, 0).toFixed(2);
    return (
        <div className="cart">
            <h3>Ordered Summary</h3>
            <h4>Course added: {cart.length}</h4>
            <p>Total Amount: ${total}</p>
        </div>
    );
};

export default Cart;