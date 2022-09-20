import React from 'react';
import logo from '../assets/AJMJ logo crop.png';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <header className='w-screen h-24 top-0 bg-black-400 drop-shadow-lg border-b-2 flex justify-center'>
        {/* <div className='w-[8rem] absolute mx-[32%] mt-8 border-4 border-black'>
          <Image src={logo} />
        </div> */}
        <div className='w-[8rem] items-center border-4 border-black'>
          <Image src={logo} />
        </div>
        <div className='container px-4 md:px-0 h-full mx-auto flex justify-end items-center'>
          <ul
            id='menu'
            className='hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
              md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6'
          >
            <li className='md:hidden z-90 fixed top-4 right-6'>
              <a href='' className='text-right text-white text-4xl'>
                &times;
              </a>
            </li>

            <li>
              <a className='text-white ' href='#'>
                Home
              </a>
            </li>
            <li>
              <a className='text-white ' href='#'>
                About
              </a>
            </li>
            <li>
              <a className='text-white ' href='#'>
                FAQ
              </a>
            </li>
          </ul>

          <div className='md:hidden '>
            <button className='text-white text-4xl font-bold ml-auto float-right'>
              &#9776;
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
