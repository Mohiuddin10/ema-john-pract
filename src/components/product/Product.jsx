import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price, ratings, seller, stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-des">
                <p className='name'>{name}</p>
                <h4><span className='price'>Price: </span>${price}</h4>
                <p className='seller'>Seller: {seller}</p>
                <p>Rating: {ratings}</p>
                <p>Available: {stock}</p>
            </div>
                <button className="addCart" onClick={() => props.addToCart(props.product)}>
                    <p>Add to cart</p>
                </button>
            

            
        </div>
    );
};

export default Product;