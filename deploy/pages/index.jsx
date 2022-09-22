import React, { useState } from 'react';
import Quote from '../components/Quote';
import Header from '../components/Header';
import Landingpage from '../components/Landingpage';
import Cards from '../components/Cards';
import Order from '../components/Order';
import Footer from '../components/Footer';

const index = () => {
  const [showCookie, setShowCookie] = useState(true);

  const handleCookies = () => {
    setShowCookie(false);
  };

  return (
    <>
      {showCookie && (
        <div>
          <section className='w-screen h-screen backdrop-blur-md fixed bg-gradient-to-b from-black via-white/25 to-white/50 z-50 md:h-72 md:bottom-0 md:bg-gradient-to-b md:from-white/50 md:via-black'>
            <content className='flex flex-col items-center md:flex md:gap-[3rem] md:flex-row md:ml-40'>
              <p className='text-white font-force text-2xl mt-[500px] md:mt-5'>
                Fulfill your cookie destiny
              </p>
              <div className='flex flex-row gap-4'>
                <a href='https://www.youtube.com/watch?v=CgYSRaiGDnI'>
                  <button className='bg-[#FF0B0B] max-w-max text-3xl text-white hover:text-[#6F2121] hover:bg-black font-bold py-2 px-4 mt-6 border-b-2 border-[#A42828]  rounded-md '>
                    Deny
                  </button>
                </a>
                <button
                  className='bg-[#26C252] max-w-max text-3xl text-white  hover:text-[#185028] hover:bg-black font-bold py-2 px-4 mt-6 border-b-2 border-[#28A44B]  rounded-md '
                  onClick={handleCookies}
                >
                  Accept
                </button>
              </div>
            </content>
          </section>
        </div>
      )}
      <div>
        <Header />
        <Landingpage />
        <div className='hidden md:block'>
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
