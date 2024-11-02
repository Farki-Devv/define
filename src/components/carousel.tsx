'use client'
/* eslint-disable @next/next/no-img-element */
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
export function CarouselPage() {
	// Rasmlarni massivga saqlaymiz
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
			className='w-full max-w-[1440px] h-[400px] mx-auto flex gap-4 overflow-x-auto overflow-hidden'
		>
			<CarouselContent className='flex h-[400px] gap-4 px-2'>
				{images.map((src, index) => (
					<CarouselItem
						key={index}
						className='flex md:basis-1/2 lg:basis-1/3 mt-0.5'
					>
						<div className='rounded-2xl shadow-lg bg-white items-center justify-center w-[40rem] h-[22.5rem]'>
							<div className='flex flex-col gap-4'>
								<img
									src={src.url}
									alt={`Slide ${index + 1}`}
									className='rounded-2xl object-contain'
								/>
								<span className='text-[#A2A2A2] text-sm'>{src.name}</span>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
