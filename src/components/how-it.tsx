'use client'

import Link from 'next/link'
import { useState } from 'react'
import ChatMessages from './chat-messages'
import TrelloBoard from './trello-board'

function HowIt() {
	const [logoOpen, setLogoOpen] = useState<boolean>(true)

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex max-w-[40rem] mx-auto  flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='text-2xl text-center'>How it works</span>
					<span className='text-sm text-neutral-400 text-center'>
						Check out how our, process moves your project forward, keeping you
						happy all the way. You add requests—we bring them to life and keep
						you updated as we go.
					</span>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='flex gap-3 max-sm:flex-col'>
						<div className='max-w-[24.625rem] h-[19.5rem] shadow-lg w-full rounded-2xl pt-4 px-3.5 overflow-hidden'>
							<h1 className='text-sm'>Shared Trello board</h1>
							<p className='text-sm text-[#A2A2A2]'>
								Add your requests, set priorities, and we’ll tackle them from
								top to bottom.
							</p>
							<div className='mt-8'>
								<TrelloBoard />
							</div>
						</div>

						<div className='flex-1 shadow-lg w-full rounded-lg p-4 h-[19.5rem]'>
							{logoOpen ? (
								<img
									src='/logomain.svg'
									alt=''
									onClick={() => setLogoOpen(!logoOpen)}
									className='m-auto animate-pulse cursor-pointer'
								/>
							) : (
								<div className='mt-[48px] animista-two max-w-[11.625rem] mx-auto shadow-lg rounded-md p-2'>
									<h1 className='text-[0.625rem] font-normal text-[#A1A1AA]'>
										Mete @ Define
									</h1>
									<p className='font-medium text-xs'>
										Hey there! We’ve got the changes ready. Check it out:
										<Link href={'#'} className='text-[#0091FF]'>
											https://def.in/e/cN4fYp
										</Link>
									</p>
								</div>
							)}
							<div className='mt-14'>
								<h1 className='text-sm'>Slack updates</h1>
								<p className='text-sm text-[#A2A2A2]'>
									Every time your request gets an update, you’ll get a ping in
									our shared Slack channel so you can check it out.
								</p>
							</div>
						</div>
					</div>
					<div className='flex gap-3 max-sm:flex-col'>
						<div className='flex-1 shadow-lg rounded-lg p-3 '>
							<h1 className='text-sm'>Quick Turnaround</h1>
							<p className='text-[#A2A2A2] text-sm'>
								With small, focused requests, we’re able to build, launch, and
								notify you fast.
							</p>
							<div className=''>
								<img src='/clock-frame.png' alt='' />
							</div>
						</div>
						<ChatMessages />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowIt
