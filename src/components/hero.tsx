/* eslint-disable @next/next/no-img-element */
import { Button } from './ui/button'
// The hero component can get information about us from this file
function Hero() {
	return (
		<div className='max-w-[40rem] mx-auto py-[5.875rem] flex flex-col gap-[1.375rem]'>
			<div className='flex flex-col text-2xl text-center'>
				<span>Limitless innovation.</span>
				<span className='text-neutral-400 tracking-wide'>
					From websites to apps, we help founders bring their ideas to life with
					thoughtful, creative designs
				</span>
			</div>
			<span className='text-center text-neutral-400 text-sm'>
				Define is empowering brands worldwide with strategic design and
				technology solutions. Our focus is on making experiences that are not
				only beautiful but also easy to use and memorable for your audience.
			</span>
			<div className='flex gap-2.5 justify-center'>
				<Button size={'lg'} className='rounded-full'>
					Show Pricing
				</Button>
				<Button size={'lg'} className='bg-[#1010101A] text-black'>
					View Work
				</Button>
			</div>
			<div className='flex justify-center items-center'>
				<img src='./image.png' alt='' className='w-[24.375rem] mt-1' />
			</div>
		</div>
	)
}

export default Hero
