import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="products">
                <h1>Product: {products.length}</h1>

            </div>
            <div className="order">

            </div>
            
        </div>
    );
};

export default Shop;