import React from 'react';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const Order = (props) => {
    // Total Price Calculation 
    console.log(props)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of props.cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        console.log(product.quantity)
    }
    let tax = total * 0.1;
    tax = parseFloat(tax.toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='orderCart'>
            <div className="info">
                <h2 className='heading'>Order Summery</h2>
                <h5>Selected Items: {quantity}</h5>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
            <div className="btn">
            <button className='clearCart'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='reviewOrder'>
                <p>Review Order</p>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            </div>
        </div>
    );
};

export default Order;