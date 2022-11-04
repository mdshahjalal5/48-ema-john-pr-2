import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // console.log(product)
    const {name, id, img, price, quantity, ratings, seller} = product;
    // console.log(name, id , img, price, quantity, ratings, seller)
    return (
        <div className='product'>
         <div className="product-info">
         <img src={img} alt="" />
            <p>Name: <strong>{name} </strong></p>
            <p>Price: <strong>{price} </strong> </p>
            <p>Quantity: <strong>{quantity} </strong> </p>
            <p>Ratings: <strong>{ratings} stars </strong> </p>
         </div>
         <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
            <p>Add to Cart</p>
            {/* <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> */}
         </button>
        </div>
            
    );
};

export default Product;