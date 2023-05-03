import React from 'react';
import { useStateValue } from '../../contexts/StateProvider';

import './product.styles.css';

const Product = ({ id, title, image, rating, price }) => {

  const [{ cart }, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add Item to basket
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <div className='product' key={id}>
      <div className='product_info'>
        <p>{title}</p>
        <small>$</small>
        <span className='product_price'>
          <strong>{price}</strong>
        </span>
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
      <button onClick={addToBasket}>Add To Cart</button>
    </div>
  );
};

export default Product;
