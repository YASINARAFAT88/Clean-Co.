import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, ratings, img, price } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6>{name}</h6>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}Star</small></p>
                <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                    <p>Add To Cart</p>
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                </button>
            </div>
        </div>
    );
};

export default Product;