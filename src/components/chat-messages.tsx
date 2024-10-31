/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/**
 * @file chat-messages.tsx
 * @description this file return chat messages component
 */
import { useState } from 'react'

type Message = {
	id: number
	author: string
	avatar: string
	text: string
	type: 'sent' | 'received'
}

const initialMessages: Message[] = [
	{
		id: 1,
		author: 'You',
		avatar: '/Avatar.png',
		text: 'Hey team! Loving the direction so far! 👏 Quick question—could we try a couple of layout variations on the homepage?',
		type: 'sent',
	},
]

export default function ChatMessages() {
	const [messages, setMessages] = useState<Message[]>(initialMessages)
	const [active, setActive] = useState(false)

	return (
		<div className='max-w-[24.625rem] shadow-lg w-full rounded-lg py-4 px-3.5 flex  flex-col items-center'>
			<div className='mt-6'>
				{messages.map(message => (
					<div
						key={message.id}
						className={`w-[240px] h-[69px] bg-[#FAFAFA] p-1.5 rounded-lg drop-shadow flex gap-2 cursor-pointer`}
						onClick={() => setActive(!active)}
					>
						<img src={message.avatar} alt='' className='size-5' />
						<div className='flex flex-col'>
							<span className='text-[8px] text-[#A1A1AA]'>
								{message.author}
							</span>
							<span className='text-[10px]'>{message.text}</span>
						</div>
					</div>
				))}
			</div>

			{active && (
				<div className='-mt-2 w-[20rem] h-[5.313rem] border-2 border-[#30A46C] bg-[#30A46C1A] p-1.5 rounded-lg drop-shadow flex gap-2'>
					<img src='/Avatar.png' alt='' className='size-6' />
					<div className='flex flex-col'>
						<span className='text-[10px] text-[#30A46C]'>Define</span>
						<span className='text-xs leading-[18px]'>
							We’re thrilled you’re loving it! Absolutely, we’ll share a couple
							of options soon and keep you posted on the progress!
						</span>
					</div>
				</div>
			)}
			<div>
				<h1 className='text-sm mt-6 text-start'>Direct Contact</h1>
				<p className='text-[#A2A2A2] text-sm'>
					Communication’s easy—you’ll work one-on-one with a designer from our
					team.
				</p>
			</div>
		</div>
	)
}
