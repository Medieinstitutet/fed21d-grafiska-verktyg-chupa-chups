import React from 'react';

const Cards = () => {
  return (
    <section className='mt-[14rem] mb-[7rem] md:mt-0'>
      <div className='grid grid-rows-2 w-screen gap-5 grid-flow-col mt-4 px-6 h-[450px] md:px-20 md:gap-10 md:h-[550px]'>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[25vh]'>
          <h2 className='mt-4 font-heading text-2xl'>NEW COLOURS</h2>
          <p className='mx-2 mt-5 font-content '>
            Six new cool colours! Pick your favourite.
          </p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] mt-5 hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[25vh]'>
          <h2 className='mt-4 font-heading text-2xl'>BATTERY</h2>
          <p className='mx-2 mt-5 font-content '>Improved battery time.</p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[25vh]'>
          <h2 className='mt-4 font-heading text-2xl'>NEW GRIP</h2>
          <p className='mx-2 mt-5 font-content '>
            New improved grip. For better comfort.
          </p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] mt-5 hover:shadow-[0_0px_20px_10px_#ff0000] md:h-[25vh]'>
          <h2 className='mt-4 font-heading text-2xl'>WARRANTY</h2>
          <p className='mx-2 mt-5 font-content '>Lifetime warranty.</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
