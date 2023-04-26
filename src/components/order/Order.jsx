import React from 'react';

const Order = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Selected Items: {props.cart.length}</h5>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Order;