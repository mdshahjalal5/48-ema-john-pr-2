import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Shop.css';
import Cart from '../Cart/Cart'
const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products)
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product)=>{
        setCart([...cart, product])
    }
    return (
        <div className='shop-container'>
             
            
             <div className="products-container">
                 {products.map(product => <Product product= {product} 
                 key={product.id} 
                 handleAddToCart={handleAddToCart}>
                 </Product> )}
             </div>
             <div className="cart-container">
                    <Cart cart={cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;