'use client'
/* eslint-disable @next/next/no-img-element */
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export function CarouselPage() {
	// Rasmlarni massivga saqlaymiz
	const images = ['/my-slide.png', '/my-slide2.png', '/my-slide3.png']

	return (
		<Carousel
			opts={{
				align: 'center',
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 1000,
				}),
			]}
			className='w-full flex gap-4 overflow-x-auto overflow-hidden'
		>
			<CarouselContent className='flex'>
				{images.map((src, index) => (
					<CarouselItem
						key={index}
						className='flex gap-5 md:basis-1/3 lg:basis-1/3 py-14 mt-0.5 px-12'
					>
						<div className='rounded-2xl shadow-lg bg-white flex items-center justify-center w-[40rem] h-[22.5rem]'>
							<img
								src={src}
								alt={`Slide ${index + 1}`}
								className='rounded-2xl object-contain'
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
