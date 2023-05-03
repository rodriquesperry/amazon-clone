import React from 'react';
import './product.styles.css';

const Product = ({ id, title, image, rating, price }) => {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <small>$</small>
        <span className='product_price'><strong>{price}</strong></span>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      {/* Id */}
      {/* Title */}
      {/* Rating */}
      {/* Image */}
      {/* Price */}

      <img src={image} alt='Product Image' />
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
