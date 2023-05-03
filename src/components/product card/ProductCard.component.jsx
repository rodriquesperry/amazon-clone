import React from 'react';
import Product from '../product/Product.component';
import './product_card.styles.css';

const ProductCard = () => {
  return (
    <div className='product_card_container'>
      <Product
        id='12345'
        price='500'
        title='Lean Startup: The Complete Step-by-Step Lean Six Sigma Startup Guide'
        rating={5}
        image='https://m.media-amazon.com/images/I/41IyOLVdhtL.jpg'
      />
    </div>
  );
};

export default ProductCard;
