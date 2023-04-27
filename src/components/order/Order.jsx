import React from 'react';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const Order = (props) => {
    console.log(props)
    return (
        <div className='orderCart'>
            <div className="info">
                <h2>Order Summery</h2>
                <h5>Selected Items: {props.cart.length}</h5>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h4>Grand Total: $</h4>
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