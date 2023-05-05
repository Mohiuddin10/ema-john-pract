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

    const [cart, setCart] = useState([]);
// ====> first find exist or not by find function
// then if not-exists then set selected product quqntity to 1
// let newCar = []
// set newcart ...cart, selectedCart
    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = products.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products]);
    
    

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