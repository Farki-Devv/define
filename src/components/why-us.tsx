'use client'
import React, { useRef } from 'react';

// this file returns information about why you choose us
function WhyUs() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const scrollToImage = (direction: 'top' | 'bottom') => {
		if (containerRef.current) {
			const offset = direction === 'top' ? 0 : containerRef.current.scrollHeight;
			containerRef.current.scrollTo({
				top: offset,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className='flex flex-col max-h-[100vh] gap-3 max-w-[40rem] mx-auto drops'>
			<div className='flex flex-col'>
				<span className='text-2xl text-center'>Why us</span>
				<span className='text-sm text-neutral-400 text-center'>
					Throw your ideas our way, and we’ll take it from there. While we’re
					bringing the product to life, you can stick to doing your thing with
					sales, marketing, and connecting with your users.
				</span>
			</div>
			<div 
				ref={containerRef} 
				className='flex flex-col items-center justify-center bg-white drop-shadow h-[307px] rounded-2xl py-[10px] px-[56px] overflow-hidden scrollbar-hidden'
			>
				<img
					src='./Before.png'
					alt='Before'
					className='w-[292px] cursor-pointer mt-[310px]'
					onClick={() => scrollToImage('bottom')}
				/>
				<img
					src='./After.png'
					alt='After'
					className='cursor-pointer'
					onClick={() => scrollToImage('top')}
				/>
			</div>
		</div>
	);
}

export default WhyUs;
