import React from 'react';

const Cards = () => {
  return (
    <section className='mt-[14rem] mb-[7rem] md:mt-0 grid justify-center '>
      <div className='grid grid-rows-2 w-screen gap-5 grid-flow-col mt-4 px-6 h-[28rem] md:px-32 md:gap-10 md:h-[34rem] lg:h-[44rem] lg:w-[50%] lg:gap-16 '>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[27vh] lg:h-[42vh] lg:min-h-[330px] lg:w-[34vh] lg:min-w-[300px] lg:max-h-[450px] lg:max-w-[400px]'>
          <h2 className='mt-4 font-cards text-2xl md:text-3xl'>New colors</h2>
          <p className='mx-2 mt-5 font-content md:text-xl'>
            Six new cool colours! Pick your favourite.
          </p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] mt-5 hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[27vh] lg:h-[42vh] lg:min-h-[330px] lg:w-[34vh] lg:min-w-[300px]  lg:mt-28 lg:max-h-[450px] lg:max-w-[400px]'>
          <h2 className='mt-4 font-cards text-2xl md:text-3xl'>Battery</h2>
          <p className='mx-2 mt-5 font-content md:text-xl'>
            Improved battery time.
          </p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[27vh] lg:h-[42vh] lg:min-h-[330px] lg:w-[34vh] lg:min-w-[300px] lg:max-h-[450px] lg:max-w-[400px]'>
          <h2 className='mt-4 font-cards text-2xl md:text-3xl'>New grip</h2>
          <p className='mx-2 mt-5 font-content md:text-xl'>
            New improved grip. For better comfort.
          </p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] mt-5 hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[27vh] lg:h-[42vh] lg:min-h-[330px] lg:w-[34vh] lg:min-w-[300px] lg:mt-28 lg:max-h-[450px] lg:max-w-[400px]'>
          <h2 className='mt-4 font-cards text-2xl md:text-3xl'>Warranty</h2>
          <p className='mx-2 mt-5 font-content md:text-xl'>
            Lifetime warranty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
