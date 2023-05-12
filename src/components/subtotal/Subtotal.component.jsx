import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../contexts/StateProvider';
import { getCartTotal } from '../../reducers/StateReducer';

import './subtotal.styles.css';

const Subtotal = () => {

    const [{ cart }, dispatch] = useStateValue();


  return (
    <div className='subtotal_container'>
        {/* Price */}
        <CurrencyFormat 
            renderText={(value) => (
                <>
                {console.log(value)}
                <p className='subtotal_text'>
                    Subtotal ({cart.length} items): <strong>{` ${value} `}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" />This order contains a gift?
                </small>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />

      <button className='subtotal_button'>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
