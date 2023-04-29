import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, price, ratings, seller, stock, shipping} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-des">
                <p className='name'>{name}</p>
                <h4><span className='price'>Price: </span>${price}</h4>
                <p className='seller'>Seller: {seller}</p>
                <p>Shipping Price: ${shipping}</p>
                <p>Rating: {ratings}</p>
                <p>Available: {stock}</p>
            </div>
                <button className="addCart" onClick={() => props.addToCart(props.product)}>
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            

            
        </div>
    );
};

export default Product;