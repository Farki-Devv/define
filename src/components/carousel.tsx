'use client'
/* eslint-disable @next/next/no-img-element */
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
export function CarouselPage() {
	const images = [
		{ url: '/my-slide.png', name: 'Tapped AI' },
		{ url: '/my-slide2.png', name: 'Crime-Club' },
		{ url: '/my-slide3.png', name: 'Crime-Club' },
	]

	return (
		<Carousel
			opts={{
				align: 'center',
				loop: true,
			}}
			className='w-full px-2 py-12 mt-4 mx-auto flex gap-4 overflow-x-auto overflow-hidden'
		>
			<CarouselContent className='flex gap-4 px-2'>
				{images.map((src, index) => (
					<CarouselItem
						key={index}
						className='flex flex-col gap-1 md:gap-4 md:basis-1/2 lg:basis-1/2 mt-0.5 drop-shadow'
					>
						<div className='rounded-lg md:rounded-2xl max-md:w-[200px] max-lg:w-[400px] lg:w-[640px] 2xl:w-full shadow-lg bg-white items-center justify-center w-full h-full'>
							<div className='flex flex-col gap-4'>
								<img
									src={src.url}
									alt={`Slide ${index + 1}`}
									className='rounded-2xl object-contain'
								/>
							</div>
						</div>
						<span className='text-[#A2A2A2] max-md:text-[10px] text-sm'>{src.name}</span>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
