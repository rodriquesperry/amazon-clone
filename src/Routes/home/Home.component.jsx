import React from 'react';
import BannerLogo from '../../assets/images/amazon_banner.jpg';
import Product from '../../components/product/Product.component';

import './home.styles.css';

const Home = () => {
  return (
    <div className='home_container'>
      <img className='banner_img' src={BannerLogo} alt='' />
      <div className='product_container'>
        <div className='home_row'>
          <Product
            id='12341'
            price={500}
            title='Lean Startup: The Complete Step-by-Step Lean Six Sigma Startup Guide'
            rating={5}
            image='https://m.media-amazon.com/images/I/41IyOLVdhtL.jpg'
          />
          <Product
            id='12342'
            price={500}
            title='Lean Startup: The Complete Step-by-Step Lean Six Sigma Startup Guide'
            rating={5}
            image='https://m.media-amazon.com/images/I/41IyOLVdhtL.jpg'
          />
        </div>
        <div className='home_row'>
          <Product
            id='12343'
            price={500}
            title='Lean Startup: The Complete Step-by-Step Lean Six Sigma Startup Guide'
            rating={5}
            image='https://m.media-amazon.com/images/I/41IyOLVdhtL.jpg'
          />
          <Product
            id='12344'
            price={500}
            title='Lean Startup: The Complete Step-by-Step Lean Six Sigma Startup Guide'
            rating={5}
            image='https://m.media-amazon.com/images/I/41IyOLVdhtL.jpg'
          />
          <Product
            id='12345'
            price={500}
            title='Lean Startup: The Complete Step-by-Step Lean Six Sigma Startup Guide'
            rating={5}
            image='https://m.media-amazon.com/images/I/41IyOLVdhtL.jpg'
          />
        </div>
        <div className='home_row'>
          <Product
            id='12346'
            price={500}
            title='Lean Startup: The Complete Step-by-Step Lean Six Sigma Startup Guide'
            rating={5}
            image='https://m.media-amazon.com/images/I/41IyOLVdhtL.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
