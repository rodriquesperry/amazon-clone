import React from 'react';
import BannerLogo from '../../assets/images/amazon_banner.jpg';
import ProductCard from '../../components/product card/ProductCard.component';

import './home.styles.css';

const Home = () => {
  return (
    <div className='home_container'>
      <img className='banner_img' src={BannerLogo} alt='' />
      <div className='product_container'>
      <div className="home_row">
        <ProductCard />
        <ProductCard />
      </div>
      <div className="home_row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="home_row">
        <ProductCard />
      </div>

      </div>
    </div>
  );
};

export default Home;
