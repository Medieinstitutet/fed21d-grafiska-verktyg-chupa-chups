import React from 'react';

const Cards = () => {
  return (
    // <div className='container my-12 mx-auto px-4 md:px-12'>
    //   <div className='flex flex-wrap -mx-1 lg:-mx-4'>
    //     <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
    //       <article className='overflow-hidden rounded-lg shadow-lg'>
    //         <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
    //           <h1 className='text-lg'>
    //             <a class='no-underline hover:underline text-white' href='#'>
    //               Article Title
    //             </a>
    //           </h1>
    //           <p class-Name='text-grey-darker text-sm'>11/1/19</p>
    //         </header>

    //         <footer className='flex items-center justify-between leading-none p-2 md:p-4'>
    //           <a
    //             className='flex items-center no-underline hover:underline text-white'
    //             href='#'
    //           >
    //             <p className='ml-2 text-sm'>Author Name</p>
    //           </a>
    //           <a
    //             className='no-underline text-grey-darker hover:text-red-dark'
    //             href='#'
    //           >
    //             <span className='hidden'>Like</span>
    //             <i className='fa fa-heart'></i>
    //           </a>
    //         </footer>
    //       </article>
    //     </div>
    //   </div>
    // </div>
    <section className='mt-[14rem] mb-[7rem]'>
      <div className='grid grid-rows-2 w-screen gap-5 grid-flow-col mt-4 px-6 h-[450px]'>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] hover:shadow-[0_0px_20px_10px_#ff0000]'>
          <h1 className='mt-4 font-heading text-2xl'>NEW COLOURS</h1>
          <p className='mx-2 mt-5 font-content '>
            Six new cool colours! Pick your favourite.
          </p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] mt-5 hover:shadow-[0_0px_20px_10px_#ff0000]'>
          <h1 className='mt-4 font-heading text-2xl'>BATTERY</h1>
          <p className='mx-2 mt-5 font-content '>Improved battery time.</p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] hover:shadow-[0_0px_20px_10px_#ff0000]'>
          <h1 className='mt-4 font-heading text-2xl'>NEW GRIP</h1>
          <p className='mx-2 mt-5 font-content '>
            New improved grip. For better comfort.
          </p>
        </div>
        <div className=' text-white bg-gradient-to-br from-[#545353] to-[#111111] rounded-md border border-[#2d2d2d] text-center shadow-sm shadow-[#282727] mt-5 hover:shadow-[0_0px_20px_10px_#ff0000]'>
          <h1 className='mt-4 font-heading text-2xl'>WARRANTY</h1>
          <p className='mx-2 mt-5 font-content '>Lifetime warranty.</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
