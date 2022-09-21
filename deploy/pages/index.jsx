import React from 'react';
import Quote from '../components/Quote';
import Header from '../components/Header';
import Landingpage from '../components/Landingpage';
import Cards from '../components/Cards';

const index = () => {
  return (
    <div>
      <Header />
      <Landingpage />
      <Cards />
      <Quote />
    </div>
  );
};

export default index;
