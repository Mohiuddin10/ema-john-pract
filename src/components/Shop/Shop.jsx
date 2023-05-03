import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Order from '../order/Order';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    useEffect( () => {
        const storedCart = getShoppingCart();
        let savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find( p => p.id === id);
            savedCart.push(addedProduct);
            console.log(savedCart)
        };
        setCart(savedCart);
    }, [products]);
    const [cart, setCart] = useState([]);

    return (
        <div className='shopContainer'>
            <div className="products">
                {
                    products.map(product => <Product product={product}
                        addToCart={addToCart}
                    key={product.id}
                    />)
                }

            </div>
            <div className="order">
                <Order cart={cart}/>

            </div>
            
        </div>
    );
};

export default Shop;