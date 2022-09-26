import React from 'react';
import Quote from '../components/Quote';
import Header from '../components/Header';
import Landingpage from '../components/Landingpage';
import Cards from '../components/Cards';
import Order from '../components/Order';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';

const index = () => {
  return (
    <>
      <Cookies />

      <div>
        <Header />
        <Landingpage />
        <div className='hidden md:block lg:hidden'>
          <Quote />
        </div>
        <Cards />
        <div className='md:hidden'>
          <Quote />
        </div>
        <Order />
        <Footer />
      </div>
    </>
  );
};

export default index;
