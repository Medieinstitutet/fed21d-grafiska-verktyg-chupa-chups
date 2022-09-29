import React from 'react';
import AJMJ_logo from '../assets/AJMJ_logo_crop.png';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className='w-screen h-[4.1rem] top-0 bg-black-400 drop-shadow-lg border-b-2 flex justify-center  md:w-[90vw] md:ml-[5vw] md:justify-start z-50 relative'>
        <div className='w-[8rem] items-center border-4 border-black  z-50 md:items-start md:w-[6rem] md:mt-1'>
          <Image alt='AJMJ logo' src={AJMJ_logo} />
        </div>

        <div className='flex items-center fixed right-0'>
          <nav>
            <section className='MOBILE-MENU flex md:hidden justify-between relative'>
              <div
                className='HAMBURGER-ICON space-y-2 px-2 py-4'
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className='block h-0.5 w-8  bg-[#EFAC2B]'></span>
                <span className='block h-0.5 w-8 ml-1 bg-[#EFAC2B]'></span>
                <span className='block h-0.5 w-8  bg-[#EFAC2B]'></span>
              </div>

              <div
                className={
                  isNavOpen
                    ? ' flex flex-col space-evenly items-center w-screen h-screen relative top-0 left-0 bg-gradient-to-b from-black via-[#1d1d1d] to-[#9c9c9c85] z-45 md:h-72 md:bottom-0 md:bg-gradient-to-b md:from-white/50 md:via-black'
                    : 'hidden'
                }
              >
                {' '}
                <div
                  className='CROSS-ICON absolute top-0 right-0 '
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className='h-8 w-8 text-[#EFAC2B] mx-2 my-3'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='18' y1='6' x2='6' y2='18' />
                    <line x1='6' y1='6' x2='18' y2='18' />
                  </svg>
                </div>
                <ul className='MENU-LINK-MOBILE-OPEN flex flex-col backdrop-blur-md items-center justify-between mt-28 min-h-[250px]'>
                  <div className='w-screen border-t-2 -mt-[3rem]'></div>
                  <li className='text-5xl uppercase text-white font-heading mt-20 my-8'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='text-5xl uppercase text-white font-heading my-8'>
                    <a href='#'>About</a>
                  </li>
                  <li className='text-5xl uppercase text-white font-heading my-8'>
                    <a href='#'>FAQ</a>
                  </li>
                </ul>
              </div>
            </section>

            <ul className='DESKTOP-MENU hidden space-x-8 md:flex text-white md:mt-6 md:mr-6 md:text-2xl'>
              <li className='text-white font-desktopMenu'>
                <a href='#'>Home</a>
              </li>
              <li className='text-white font-desktopMenu'>
                <a href='#'>About</a>
              </li>
              <li className='text-white font-desktopMenu'>
                <a href='#'>FAQ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
