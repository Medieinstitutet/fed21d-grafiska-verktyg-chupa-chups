import React from 'react';
import logo from '../assets/AJMJ logo crop.png';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className='w-screen h-20 top-0 bg-black-400 drop-shadow-lg border-b-2 flex justify-center'>
        {/* <div className='w-[8rem] absolute mx-[32%] mt-8 border-4 border-black'>
          <Image src={logo} />
        </div> */}
        <div className='w-[8rem] items-center border-4 border-black mt-[0.95rem]'>
          <Image src={logo} />
        </div>
        {/* <div className='container px-4 md:px-0 h-full mx-auto flex justify-end items-center absolute'>
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
            <button className='text-[#EFAC2B] text-4xl ml-auto float-right'>
              &#9776;
            </button>
          </div>
        </div> */}
        <div className='flex items-center absolute right-0 '>
          <nav>
            <section className='MOBILE-MENU flex lg:hidden justify-between'>
              <div
                className='HAMBURGER-ICON space-y-2 px-2 py-4'
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className='block h-0.5 w-8  bg-[#EFAC2B]'></span>
                <span className='block h-0.5 w-8  bg-[#EFAC2B]'></span>
                <span className='block h-0.5 w-8  bg-[#EFAC2B]'></span>
              </div>

              <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
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
                <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
                  <li className='text-5xl uppercase font-heading'>
                    <a href='/about'>HOME</a>
                  </li>
                  <li className='text-5xl uppercase font-heading'>
                    <a href='/portfolio'>ABOUT</a>
                  </li>
                  <li className='text-5xl uppercase font-heading '>
                    <a href='/contact'>FAQ</a>
                  </li>
                </ul>
              </div>
            </section>

            <ul className='DESKTOP-MENU hidden space-x-8 lg:flex text-white'>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/portfolio'>Portfolio</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </nav>
          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: relative;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: red;
        backdrop-filter: blur(2px);
        z-index: 50 !important;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
        );
      </header>
    </>
  );
};

export default Header;
