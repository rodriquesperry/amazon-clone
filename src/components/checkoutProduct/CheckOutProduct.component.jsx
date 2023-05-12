import React from 'react';
import { useStateValue } from '../../contexts/StateProvider';

import './checkout_product.styles.css';

const CheckOutProduct = ({ id, title, price, rating, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className='checkout_product'>
      <img className='checkout_product_image' src={image} alt={title} />
      <div className='checkout_product_info'>
        <p className='checkout_product_title'>{title}</p>
        <div className='checkout_product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className='checkout_product_rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
