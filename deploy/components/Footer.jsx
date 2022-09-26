import React from 'react';
import emailloggo from '../assets/emailloggo.png';
import linkedinloggo from '../assets/linkedinloggo.png';
import phoneloggo from '../assets/phoneloggo.png';
import facebook from '../assets/facebook.png';
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
        <Image src={linkedinloggo} />
        <Image src={facebook} />
        <Image src={emailloggo} />
        <Image src={phoneloggo} />
      </div>

      <section className='hidden md:flex md:flex-row md:text-white md:my-4 md:w-[90vw] md:mb-24 font-force md:mt-20 md:justify-evenly md:text-center'>
        <div className='md:flex md:flex-col md:grow'>
          <p className='md:mb-8 md:text-xl'>Contacts</p>
          <div className='md:flex md:flex-row md:mb-2 md:pl-14 md:-mr-14 lg:pl-28'>
            <Image src={phoneloggo} layout={'fixed'} height={30} width={30} />{' '}
            <p className='md:ml-4'>070-xxx xx xx</p>
          </div>
          <div className='md:flex md:flex-row md:mb-2 md:pl-14 md:-mr-14 lg:pl-28'>
            <Image src={emailloggo} layout={'fixed'} height={30} width={30} />{' '}
            <p className='md:ml-4'>starwars@starwars.com</p>
          </div>
          <div className='md:flex md:flex-row md:pl-14 md:-mr-14 lg:pl-28'>
            <Image src={facebook} layout={'fixed'} height={30} width={30} />{' '}
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
