import React from 'react';
import Image from 'next/image';
import moon from '../assets/moon.jpeg';

const Landingpage = () => {
  return (
    <>
      <div className='flex flex-col items-center space-y-10'>
        <h1 className='font-heading text-white text-6xl text-center leading-[6rem]'>
          LIGHTSABER X
        </h1>
        <button className='bg-[#FBC53B] max-w-max text-black hover:text-[#D49900] hover:bg-black font-bold py-2 px-4 border-b-2 border-[#D49900]  rounded-md '>
          <span className=' font-content text-2xl p-1'>Order</span>
        </button>
      </div>
      <div className='w-[275px] relative -left-9 mt-10'>
        <Image src={moon} />
      </div>
    </>
  );
};

export default Landingpage;
