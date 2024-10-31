/* eslint-disable @next/next/no-img-element */
// this file has a carousel component that returns a slide to us
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'

export function CarouselPage() {
	return (
		<>
			<Carousel
				opts={{
					align: 'center',
				}}
				className='w-full flex gap-4 overflow-x-auto'
			>
				<CarouselContent className='flex'>
					<CarouselItem className='flex gap-5 md:basis-1/2 lg:basis-1/2 py-14 mt-0.5 px-12'>
						<div className='rounded-2xl shadow-lg bg-white flex items-center justify-center w-[40rem] h-[22.5rem]'>
							<div className=''>
								<img
									src={'/my-slide.png'}
									alt=''
									className='rounded-2xl object-contain'
								/>
							</div>
						</div>
						<div className='rounded-2xl shadow-lg bg-white flex items-center justify-center w-[40rem] h-[22.5rem]'>
							<div className=''>
								<img
									src={'/my-slide2.png'}
									alt=''
									className='rounded-2xl object-contain'
								/>
							</div>
						</div>
						<div className='rounded-2xl shadow-lg bg-white flex items-center justify-center w-[40rem] h-[22.5rem]'>
							<div className=''>
								<img
									src={'/my-slide3.png'}
									alt=''
									className='rounded-2xl object-contain'
								/>
							</div>
						</div>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</>
	)
}
