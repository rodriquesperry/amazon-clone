import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../../assets/images/amazon-logo-png.png';
import SearchIcon from '@mui/icons-material/Search';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useStateValue } from '../../contexts/StateProvider';

import './navigation.styles.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#cd9042',
    color: '#fff',
  },
}));

const Navigation = () => {
  const [{ cart }] = useStateValue();
  console.log(cart)

  return (
    <>
      <section className='navigation_container'>
        <div className='navigation'>
          <Link to='/'>
            <img className='navigation_logo' src={logo} alt='amazon logo' />
          </Link>

          {/* <div className='address'>
            <Link to='/login' className='navigation_link'>
              <div className='navigation_option'>
                <span className='navigation_option_line_one'>Hello</span>
                <span className='navigation_option_line_two'>
                  Select your address
                </span>
              </div>
            </Link>
          </div> */}

          <div className='navigation_search'>
            <input type='text' className='navigation_searchbar' />
            <SearchIcon className='navigation_search_icon' />
          </div>

          <div className='navigation_nav'>
            <Link to='/login' className='navigation_link'>
              <div className='navigation_option'>
                <span className='navigation_option_line_one'>
                  Hello Rodriques
                </span>
                <span className='navigation_option_line_two'>Sign In</span>
              </div>
            </Link>
            <Link to='/login' className='navigation_link'>
              <div className='navigation_option'>
                <span className='navigation_option_line_one'>Returns</span>
                <span className='navigation_option_line_two'>& Orders</span>
              </div>
            </Link>
            <Link to='/login' className='navigation_link'>
              <div className='navigation_option'>
                <span className='navigation_option_line_one'>Your</span>
                <span className='navigation_option_line_two'>Prime</span>
              </div>
            </Link>
            <Link to='/checkout' className='navigation_link'>
              <div className='navigation_cart_option'>
                <IconButton aria-label='cart'>
                  <StyledBadge badgeContent={cart?.length}>
                    <ShoppingCartIcon className='cart' />
                  </StyledBadge>
                </IconButton>
                <span className='navigation_option_line_two cart_text'>
                  Cart
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Navigation;
