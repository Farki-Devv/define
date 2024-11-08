/* eslint-disable @next/next/no-img-element */
import { Button } from './ui/button'
// The hero component can get information about us from this file
import { FaFigma } from 'react-icons/fa'
import { FaMeta, FaWebflow } from 'react-icons/fa6'
import { SiAdobe } from 'react-icons/si'
function Hero() {
	return (
		<div className='max-w-[40rem] mx-auto py-[90px] flex flex-col gap-[22px]'>
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
			<div className='flex flex-wrap gap-[44px] justify-center items-center '>
				<FaMeta
					className='size-6 text-colors-customGray hover:text-[#0081FB]'
				/>
				<SiAdobe className='size-6 text-colors-customGray hover:text-[#FF0000]' />
				<svg
					width='58'
					height='15'
					viewBox='0 0 58 15'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					style={{ cursor: 'pointer' }}
				>
					<g clipPath='url(#clip0_0_1114)'>
						<path
							d='M28.0436 4.75013C29.016 5.7291 29.5628 7.05713 29.5636 8.44222V14.3228H24.3818V9.16312C24.381 8.70121 24.1981 8.25854 23.8735 7.93239L22.0837 6.13011C21.7593 5.80368 21.3196 5.62035 20.8612 5.62037H19.2V14.3228H14.0182V0.398926H21.5766C22.2571 0.398925 22.931 0.533983 23.5597 0.79639C24.1884 1.0588 24.7596 1.44341 25.2408 1.92828L28.0436 4.75013ZM52.0182 0.398926V5.55858C52.0173 6.02048 51.8345 6.46313 51.5099 6.78926L49.7188 8.59153C49.5585 8.75316 49.3681 8.88138 49.1585 8.96885C48.9489 9.05632 48.7243 9.10134 48.4975 9.10133H46.0084C46.5475 8.26031 46.835 7.28065 46.8364 6.27942V0.398926H41.6546V5.55858C41.6537 6.02048 41.4709 6.46313 41.1463 6.78926L39.3552 8.59153C39.1948 8.75316 39.0044 8.88138 38.7949 8.96885C38.5853 9.05632 38.3607 9.10134 38.1339 9.10133H36.4727V0.398926H31.2909V14.3228H38.8494C40.224 14.3228 41.5424 13.7727 42.5146 12.7934L44.2455 11.0501V14.3228H49.213C50.5877 14.3228 51.9061 13.7727 52.8783 12.7934L55.6799 9.97152C56.6524 8.99257 57.1991 7.66452 57.2 6.27942V0.398926H52.0182ZM0.200012 5.62037H3.65456V14.3228H8.83638V5.62037H12.2909V0.398926H0.200012V5.62037Z'
							fill='#101010'
							fillOpacity='0.3'
							className='svg-path'
						/>
					</g>
					<defs>
						<clipPath id='clip0_0_1114'>
							<rect
								width='57'
								height='14'
								fill='white'
								transform='translate(0.200012 0.36084)'
							/>
						</clipPath>
					</defs>
				</svg>
				<FaFigma className='size-6 text-colors-customGray hover:text-[#a259ff]' />
				<FaWebflow className='size-6 text-colors-customGray hover:text-[#146EF5]' />
				<svg
					width='22'
					height='23'
					viewBox='0 0 22 23'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clipPath='url(#clip0_0_1120)'>
						<path
							d='M22 22.3608H0V0.36084H22V22.3608Z'
							fill='#101010'
							fillOpacity='0.3'
						/>
						<path
							d='M5.61135 11.8541C5.61135 12.8991 5.90148 13.015 7.08192 13.0573V13.4443H2.37976V13.0573C3.34707 13.0184 3.63789 12.9026 3.63789 11.8541V5.04341C3.63789 3.99842 3.34776 3.88257 2.41895 3.84029V3.45667H10.7198L10.7783 5.64292H10.3709C10.0227 4.54017 9.63529 4.17235 7.70067 4.17235H6.18817C5.7241 4.17235 5.62717 4.2686 5.62717 4.6756V7.84841H6.36279C7.9107 7.84841 8.23967 7.55829 8.4332 6.53254H8.82026V10.0347H8.4332C8.22007 8.87382 7.63982 8.5641 6.36279 8.5641H5.62717L5.61135 11.8541ZM20.1039 3.47592H11.3967L11.1835 5.66216H11.6868C11.9962 4.59792 12.4802 4.1916 13.5248 4.1916H14.7438V11.8352C14.7438 12.8802 14.4536 12.9961 13.3505 13.0384V13.4254H18.15V13.0349C17.0276 12.9961 16.7568 12.8802 16.7568 11.8318V4.21085H17.9757C19.0207 4.21085 19.4882 4.59792 19.8137 5.68141H20.317L20.1039 3.47592Z'
							fill='#FAFAFA'
							className='svg-path-ft'
						/>
					</g>
					<defs>
						<clipPath id='clip0_0_1120'>
							<rect
								width='22'
								height='22'
								fill='white'
								transform='translate(0 0.36084)'
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	)
}

export default Hero
