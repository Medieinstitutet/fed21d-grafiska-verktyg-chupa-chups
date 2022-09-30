import React from 'react';
import email_icon from '../assets/email_icon.png';
import linkedin_icon from '../assets/linkedin_icon.jpg';
import phone_icon from '../assets/phone_icon.png';
import facebook_icon from '../assets/facebook_icon.jpg';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <p className='font-force text-white border-b-2 border-white mt-8 pb-8 text-center md:text-2xl md:w-[90vw] md:ml-[5vw]'>
        How to find us?
        <br />
        Use the <span className='text-[#FBC53B]'>force!</span>
      </p>

      <div className='flex flex-row gap-14 mx-10 mt-4 pb-24 md:hidden'>
        <Image alt='Linkedin icon' src={linkedin_icon} />
        <Image alt='facebook icon' src={facebook_icon} />
        <Image alt='Email icon' src={email_icon} />
        <Image alt='Telephone icon' src={phone_icon} />
      </div>

      <section className='hidden md:flex md:flex-row md:text-white md:my-4 md:w-[90vw] md:mb-24 font-force md:mt-20 md:justify-evenly md:text-center'>
        <div className='md:flex md:flex-col md:grow'>
          <p className='md:mb-8 md:text-xl'>Contacts</p>
          <div className='md:flex md:flex-row md:mb-2 md:pl-14 md:-mr-14 lg:pl-28'>
            <Image
              alt='Telephone icon'
              src={phone_icon}
              layout={'fixed'}
              height={30}
              width={30}
            />{' '}
            <p className='md:ml-4'>070-xxx xx xx</p>
          </div>
          <div className='md:flex md:flex-row md:mb-2 md:pl-14 md:-mr-14 lg:pl-28'>
            <Image
              alt='Email icon'
              src={email_icon}
              layout={'fixed'}
              height={30}
              width={30}
            />{' '}
            <p className='md:ml-4'>starwars@starwars.com</p>
          </div>
          <div className='md:flex md:flex-row md:pl-14 md:-mr-14 lg:pl-28'>
            <Image
              alt='facebook icon'
              src={facebook_icon}
              layout={'fixed'}
              height={30}
              width={30}
            />{' '}
            <p className='md:ml-4'>Starwars</p>
          </div>
        </div>
        <div className='md:border-l-2 md:border-r-2 md:border-white md:grow'>
          <p className='md:mb-8 md:text-xl'>Privacy</p>
          <p className='mb:mb-4'>Settings</p>
          <p>Cookies</p>
        </div>
        <div className='md:grow'>
          <p className='md:mb-8 md:text-xl'>Info</p>
          <p className='mb:mb-4'>Death Star</p>
          <p>Darth Vader</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
