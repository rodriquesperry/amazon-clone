import React from 'react';
import { useStateValue } from '../../contexts/StateProvider';
import CheckoutProduct from '../../components/checkoutProduct/CheckOutProduct.component';
import Subtotal from '../../components/subtotal/Subtotal.component';

import CheckOutImage from '../../assets/images/amazon-png-logo-checkout.png';

import './checkout.styles.css';

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <>
      <div className='amazon_img_container'>
        <img className='amazon_img' src={CheckOutImage} alt='' />
      </div>
      <div className='checkout_container'>
        <div className='checkout_left'>
          <div className='prime_card_ad'></div>

          {cart?.length === 0 ? (
            <div className='checkout_product_container'>
              <h2>Your Shopping Cart is empty</h2>
              <p>
                You have no items in your cart. To buy one or more, click on
                "Add to Cart" next to the item.
              </p>
            </div>
          ) : (
            <div className='checkout_product_container'>
              <h2 className='checkout_title'>Your Shopping Cart...</h2>
              {cart?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className='checkout_right'>
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
