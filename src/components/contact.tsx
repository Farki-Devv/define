import { Button } from './ui/button'
//  contact component
function Contact() {
	return (
		<div className='max-w-[40rem] mx-auto p-[5.875rem] text-center flex-col flex justify-center gap-6'>
			<h1 className='text-2xl'>Let’s define your vision together</h1>
			<div>
				<Button
					variant='outline'
					className='w-fit rounded-2xl border-none bg-gray-100 hover:bg-gray-100'
				>
					Schedule a Call
				</Button>
			</div>
			<p className='text-[#A2A2A2] text-sm'>
				Or drop us an email:{' '}
				<span className='text-[#101010]'>hi@usedefine.com</span>
			</p>
		</div>
	)
}

export default Contact
