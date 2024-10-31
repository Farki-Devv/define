import { Check } from 'lucide-react'
import { Button } from './ui/button'
// statick pricing
const pricing = [
	{
		name: 'Trial week ⏤ no strings attached',
	},
	{
		name: 'Async through Slack',
	},
	{
		name: 'Unlimited requests and revisions',
	},
	{
		name: '2-3 updates per week',
	},
	{
		name: 'Pause or cancel anytime',
	},
]

// Pricing component
export default function Pricing() {
	return (
		<div className='max-w-[40rem] mx-auto px-4 space-y-6'>
			<div className='text-center flex flex-col'>
				<h2 className='text-2xl'>Pricing</h2>
				<p className='text-muted-foreground'>
					Weve got a variety of plans designed to fit your needs. Whether youre
					looking for a flat-rate project, a flexible subscription, or a mix of
					both.
				</p>
			</div>

			<div className='w-[312px] h-[27.438rem] bg-[#FFFFFF] m-auto rounded-2xl drop-shadow py-4 p-[0.688rem] flex flex-col gap-8'>
				<div className='flex flex-col gap-1.5'>
					<div className='w-full justify-between'>
						<span className='text-sm'>Unlimited design</span>
						<span className='float-right py-0.5 px-1.5 bg-[#FFB2241A] text-[#AD5700] text-xs'>
							2 spots left
						</span>
					</div>
					<div className='flex items-end'>
						<span className='text-2xl'>€1.995</span>
						<span className='text-sm bottom-0 left-0 text-[#A2A2A2]'>/mo</span>
					</div>
					<span className='text-[#A2A2A2] text-sm'>
						The ideal solution for those in need of design services of any type
						and scale.
					</span>
				</div>
				<div className='flex flex-col gap-3'>
					{pricing.map(item => (
						<div key={item.name} className='flex gap-2'>
							<span className='size-5 rounded-full bg-[#A3A3A3] flex items-center justify-center'>
								<Check className='size-3 text-white' />
							</span>
							<span className='text-sm text-[#A2A2A2]'>{item.name}</span>
						</div>
					))}
				</div>
				<div className='flex flex-col gap-2'>
					<Button className='h-10 rounded-full bg-[#1010101A] text-black'>
						Schedule a Call
					</Button>
					<Button className='h-10 rounded-full'>Get Started</Button>
				</div>
			</div>
		</div>
	)
}
