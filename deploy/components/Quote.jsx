import React from 'react';
import grogu from '../assets/grogu.png';
import Image from 'next/image';

const Quote = () => {
	return (
		<div className='flex flex-row m-1 justify-center items-center space-x-4 ml-4 md:justify-start md:ml-28 md:mt-10'>
			<Image src={grogu} />

			<p className='font-quote text-xl max-w-[11rem]'>
				<q className='text-[#FAFF00]'>
					<span className='text-white'>The product is strong in this one</span>
				</q>
				<span className='text-white'> -Grogu</span>
			</p>
		</div>
	);
};

export default Quote;
