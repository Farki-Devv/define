'use client'
import { useRef } from 'react'
import { Separator } from './ui/separator'

const whyUsElementOne = [
	{
		name: 'Closing a deal',
		time: '9AM-12PM',
	},
	{
		name: 'Talk to users',
		time: '12PM-3PM',
	},
	{
		name: 'Building',
		time: '3PM-6PM',
	},
	{
		name: 'Launching',
		time: '12PM-15PM',
	},
]
const MiddleCard = [
	{
		name: 'Cycle planning',
		time: '12PM-1PM',
	},
]
const whyUsElementTwo = [
	{
		name: 'Talk to users',
		time: '9AM-12PM',
	},
	{
		name: 'Building',
		time: '9AM-12PM',
	},
]
const WhyUsElementThree = [
	{
		name: 'Closing a deal',
		time: '9AM-12PM',
	},
	{
		name: 'Launching',
		time: '9AM-12PM',
	},
]
// this file returns information about why you choose us
function WhyUs() {
	const containerRef = useRef<HTMLDivElement | null>(null)

	const scrollToImage = (direction: 'top' | 'bottom') => {
		if (containerRef.current) {
			const offset = direction === 'top' ? 0 : containerRef.current.scrollHeight
			containerRef.current.scrollTo({
				top: offset,
				behavior: 'smooth',
			})
		}
	}

	const colorsOne = [
		{
			border: '#0091FF',
			name: '#0091FF',
			bg: '#0091FF1A',
			time: '#0091FF80',
		},
		{
			border: '#FFB224',
			name: '#FFA01C',
			bg: '#FFB2241A',
			time: '#FFA01C80',
		},
		{
			border: '#E54D2E',
			name: '#E54D2E',
			bg: '#E54D2E1A',
			time: '#E54D2E80',
		},
		{
			border: '#30A46C',
			name: '#30A46C',
			bg: '#30A46C1A',
			time: '#30A46C80',
		},
	]

	const colorsTwo = [
		{
			border: '#FFB224',
			name: '#FFA01C',
			bg: '#FFB2241A',
			time: '#FFA01C80',
		},
		{
			border: '#E54D2E',
			name: '#E54D2E',
			bg: '#E54D2E1A',
			time: '#E54D2E80',
		},
	]
	const colorsThree = [
		{
			border: '#0091FF',
			name: '#0091FF',
			bg: '#0091FF1A',
			time: '#0091FF80',
		},
		{
			border: '#30A46C',
			name: '#30A46C',
			bg: '#30A46C1A',
			time: '#30A46C80',
		},
	]
	return (
		<div className='flex flex-col max-h-[100vh] gap-3 max-w-[40rem] mx-auto items-center'>
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
				className='flex flex-col max-md:w-[320px] items-center justify-center bg-white drop-shadow h-[308px] rounded-2xl py-[20px] max-md:px-0 px-[56px] overflow-hidden scrollbar-hidden'
			>
				{/*  */}
				<div
					onClick={() => scrollToImage('bottom')}
					className='flex drop-shadow bg-white gap-1.5 flex-col w-[292px] h-[306px] px-3 py-2 rounded-xl mt-[550px]'
				>
					{whyUsElementOne.map((item, index) => {
						// Ensure `colorsOne` is used instead of `colorsTwo`, or define `colorsTwo` if needed.
						const color = colorsOne[index % colorsOne.length]

						// Add a fallback to prevent errors if `color` is undefined.
						return (
							<div
								key={item.name}
								// Set dynamic styles with inline style attribute
								style={{
									borderColor: color?.border || '#000', // Default to black if undefined
									backgroundColor: color?.bg || '#f0f0f0', // Default light gray background if undefined
								}}
								className='hover:scale-103 transition-all cursor-pointer w-full h-[68px] rounded-[6px] border px-2 py-1.5 flex flex-col gap-1'
							>
								<span
									// Text color for name
									style={{ color: color?.name || '#000' }} // Default to black if undefined
									className='text-xs font-medium'
								>
									{item.name}
								</span>
								<span
									// Text color for time with 50% opacity
									style={{ color: color?.time || '#888888' }} // Default to gray if undefined
									className='text-xs font-medium'
								>
									{item.time}
								</span>
							</div>
						)
					})}
				</div>

				<div
					onClick={() => scrollToImage('top')}
					className='flex mt-[280px] md:ml-4 drop-shadow h-[269] bg-[#FAFAFA] gap-1.5 flex-col w-[512px] max-md:w-[300px] px-3 py-2 rounded-xl'
				>
					<div className='flex justify-between px-[103px] border-b py-2'>
						<span className='text-[13px] font-medium'>You</span>
						<Separator orientation='vertical' className='ml-5' />
						<span className='text-[13px] font-medium'>Define</span>
					</div>
					{/*  */}
					<div className='flex gap-2'>
						{whyUsElementTwo.map((item, index) => {
							// Get color properties based on the index (using modulo to repeat colors if needed)
							const color = colorsTwo[index % colorsOne.length]
							return (
								<div
									key={item.name}
									// Set dynamic styles with inline style attribute
									style={{
										borderColor: color.border, // Border color
										backgroundColor: color.bg, // Background color with 10% opacity
									}}
									className='hover:scale-103 transition-all cursor-pointer w-full h-[68px] rounded-[6px] border px-2 py-1.5 flex flex-col gap-1'
								>
									<span
										// Text color for name
										style={{ color: color.name }}
										className='text-xs font-medium'
									>
										{item.name}
									</span>
									<span
										// Text color for time with 50% opacity
										style={{ color: color.time }}
										className='text-xs font-medium'
									>
										{item.time}
									</span>
								</div>
							)
						})}
					</div>
					{/*  */}
					<div>
						{MiddleCard.map(item => {
							return (
								<div
									key={item.name}
									className='hover:scale-103 transition-all cursor-pointer w-full h-[68px] rounded-[6px] border border-[#8F8F8F] px-2 py-1.5 flex flex-col gap-1 bg-[#8F8F8F1A]'
								>
									<span className='text-xs font-medium text-[#8F8F8F]'>
										{item.name}
									</span>
									<span className='text-xs text-[#8F8F8F80] font-medium'>
										{item.time}
									</span>
								</div>
							)
						})}
					</div>
					{/*  */}
					<div className='flex gap-2'>
						{WhyUsElementThree.map((item, index) => {
							// Get color properties based on the index (using modulo to repeat colors if needed)
							const color = colorsThree[index % colorsOne.length]
							return (
								<div
									key={item.name}
									// Set dynamic styles with inline style attribute
									style={{
										borderColor: color.border, // Border color
										backgroundColor: color.bg, // Background color with 10% opacity
									}}
									className='hover:scale-103 transition-all cursor-pointer w-full h-[68px] rounded-[6px] border px-2 py-1.5 flex flex-col gap-1'
								>
									<span
										// Text color for name
										style={{ color: color.name }}
										className='text-xs font-medium'
									>
										{item.name}
									</span>
									<span
										// Text color for time with 50% opacity
										style={{ color: color.time }}
										className='text-xs font-medium'
									>
										{item.time}
									</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyUs
