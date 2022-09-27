import React from 'react';
import Image from 'next/image';
import moon from '../assets/moon.jpeg';
import gubbe from '../assets/gubbe.png';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Landingpage = () => {
  const handleSwitch = () => {
    document.body.classList.toggle('a11y');
  };

  return (
    <>
      <div className='flex flex-row items-center relative left-2 top-2 w-[98vw] md:left-10 md:w-[90vw] lg:w-[80vw] lg:left-24 '>
        <label
          htmlFor='default-toggle'
          className='inline-flex relative items-center'
        >
          <input
            type='checkbox'
            value=''
            id='default-toggle'
            className='sr-only peer'
            onChange={handleSwitch}
          />
          <div className="mr-3 w-11 h-6 bg-[#4D4949] rounded-full peer dark:bg-[#4D4949] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#4D4949] peer-checked:bg-[#32D74B]"></div>
        </label>

        <Image src={gubbe} height={25} width={27} />
      </div>
      <div className='flex flex-col items-center space-y-10 mt-10'>
        <h1 className='font-heading text-white text-7xl text-center leading-[4rem] px-3 mt-10 uppercase'>
          Lightsaber
        </h1>
        <h1 className='font-heading text-white text-7xl text-center leading-[4rem] px-3'>
          X
        </h1>
        <button className='bg-[#FBC53B] max-w-max text-black hover:text-[#D49900] hover:bg-black font-bold py-2 px-4 border-b-2 border-[#D49900]  rounded-md lg:z-50 '>
          <span className=' font-content text-2xl p-1'>Order</span>
        </button>
      </div>
      <div className='w-[275px] relative -left-9 mt-10 -z-0 md:w-[550px] lg:w-[50%] lg:left-5 lg:-top-28 lg:z-10'>
        <Image src={moon} />
      </div>
    </>
  );
};

export default Landingpage;
