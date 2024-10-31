import Link from 'next/link'
// footer component
function Footer() {
	return (
		<div className='max-w-[40rem] w-full mx-auto px-4 flex py-5 justify-between gap-3'>
			<p className='text-sm text-[#A2A2A2]'>© An Rut 2025</p>

			<Link href={'#'} className='text-sm text-[#A2A2A2]'>
				X (Twitter)
			</Link>
		</div>
	)
}

export default Footer
