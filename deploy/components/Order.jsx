import React from 'react';
import lightsabers from '../assets/lightsabers.png';
import Image from 'next/image';
import Quote from '../components/Quote';

const order = () => {
  return (
    <>
      <section className='mt-40 flex flex-col items-center space-between border-b-2 md:border-t-2 md:w-[90vw] md:ml-[5vw] lg:border-t-0 lg:border-b-2 lg:mt-64'>
        <div className='lg:flex lg:flex-row items-center'>
          <div className=' flex flex-col items-center space-between lg:max-w-[50%] lg:space-x-3 lg:ml-40'>
            <h3 className='font-color text-white mb-4 text-3xl md:mt-32 uppercase'>
              Pick your color here
            </h3>

            <div className='mx-12 md:mx-36 lg:mx-12 lg:min-w-[30rem] lg:max-w-[30rem]'>
              <Image alt='Image of lightsabers' src={lightsabers} />
            </div>
            <div className='hidden md:hidden lg:block'>
              <Quote />
            </div>
          </div>
          <div className=' flex flex-col items-center space-between lg:max-w-[50%] lg:mt-24'>
            <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-2xl border border-[#959494] shadow-sm shadow-[#282727] font-form mx-4 px-10 md:mx-48 md:px-4 lg:min-w-[25rem] lg:max-w-[25rem] lg:px-8 lg:h-[30rem]'>
              <h4 className='text-2xl font-bold border-b-2 my-7 text-center'>
                Order
              </h4>

              <form>
                <label htmlFor='name' className='hidden'>
                  Name
                </label>
                <input
                  name='name'
                  className='shadow appearance-none bg-inherit border-2 border-slate-200 rounded-3xl w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline mb-5 hover:shadow-[0_0px_10px_5px_#ff0000]'
                  id='username'
                  type='text'
                  placeholder='Enter name'
                />

                <label htmlFor='email' className='hidden'>
                  Email
                </label>
                <input
                  name='email'
                  className='shadow appearance-none bg-inherit border-2 border-slate-200 rounded-3xl w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline mb-5 hover:shadow-[0_0px_10px_5px_#ff0000]'
                  id='email'
                  type='text'
                  placeholder='Enter email'
                />

                <label htmlFor='color' className='hidden'>
                  Color
                </label>
                <input
                  name='color'
                  className='shadow appearance-none bg-inherit border-2 border-slate-50 rounded-3xl w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-[0_0px_10px_5px_#ff0000]'
                  id='color'
                  type='text'
                  placeholder='Enter color'
                />
              </form>
              <p className='my-7 text-center'>Need help?</p>
            </div>
            <button className='bg-[#FBC53B] max-w-max text-black hover:text-[#D49900] hover:bg-black font-bold py-2 px-4 mt-6 border-b-2  border-[#D49900]  rounded-md lg:h-16 '>
              <span className=' font-content text-2xl p-1'>Send</span>
            </button>
          </div>
        </div>
        <svg
          className='mt-4 mb-2 md:mt-10 md:mb-4'
          width='37'
          height='45'
          viewBox='0 0 37 45'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.6992 22.6875H12.1992L18.0117 29.3672L23.8008 22.6875H25.3008V39H22.957V26.5781L22.2656 27.5156L18.0117 32.4727L13.7578 27.5273L13.043 26.5898V39H10.6992V22.6875Z'
            fill='#DFDFDF'
          />
          <path
            d='M2.88281 39.1172C2.55469 39.1172 2.09766 39.0977 1.51172 39.0586V36.7969C1.82422 36.8906 2.38672 36.9375 3.19922 36.9375C4.01953 36.9375 4.70703 36.8242 5.26172 36.5977C5.82422 36.3711 6.29297 36.0117 6.66797 35.5195C7.42578 34.5273 7.80469 32.9375 7.80469 30.75V24.7617H1.79297V22.6875H10.1484V30.75C10.1484 34.9844 8.81641 37.6016 6.15234 38.6016C5.23828 38.9453 4.14844 39.1172 2.88281 39.1172Z'
            fill='#DFDFDF'
          />
          <path
            d='M34.1172 39.1172C34.4453 39.1172 34.9023 39.0977 35.4883 39.0586V36.7969C35.1758 36.8906 34.6133 36.9375 33.8008 36.9375C32.9805 36.9375 32.293 36.8242 31.7383 36.5977C31.1758 36.3711 30.707 36.0117 30.332 35.5195C29.5742 34.5273 29.1953 32.9375 29.1953 30.75V24.7617H35.207V22.6875H26.8516V30.75C26.8516 34.9844 28.1836 37.6016 30.8477 38.6016C31.7617 38.9453 32.8516 39.1172 34.1172 39.1172Z'
            fill='#DFDFDF'
          />
          <path
            d='M17.3955 7.36719H18.9341L25.5264 23H23.1904L21.6069 19.0693H14.6665L13.0942 23H10.8032L17.3955 7.36719ZM20.8882 17.2725L18.1479 10.4219L15.3965 17.2725H20.8882Z'
            fill='#DFDFDF'
          />
        </svg>
      </section>
    </>
  );
};

export default order;
