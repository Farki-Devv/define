// client static messages
const clients = [
	{
		name: 'Victor Nolan',
		nick: 'West LLC',
		text: 'Working with Define was a fantastic experience. They took my rough idea and turned it into a polished product. The team was super responsive and kept me updated throughout the process. I felt like we were truly collaborating, and I’m really pleased with how everything turned out.',
		image: './victor.png',
	},
	{
		name: 'Harriet Vandervort',
		nick: 'Dach, Medhurst and Stiedemann',
		text: 'Define did a fantastic job with my brand. They took the time to understand my vision and helped create an identity that feels true to who I am. I appreciated their feedback and creativity, which made the process enjoyable. I can’t wait to share my new look.',
		image: './harry.webp.png',
	},
	{
		name: 'Richard Reinger',
		nick: 'Muller, O`Conner and Grimes',
		text: 'I was really impressed with how Define transformed my concept into a tangible product. They understood my vision right away and made valuable suggestions that improved the design. Communication was seamless, and I felt involved every step of the way.',
		image: './richard.webp.png',
	},
]
const gridClinet = [
	{
		name: 'Ella Zulauf',
		nick: 'Gleason - Tillman',
		text: 'Define did an amazing job with my website. They captured my vision and created a site that’s both beautiful and functional. The communication was excellent, and I felt like they genuinely cared about my project. I’m thrilled with the final result.',
		image: './ella.webp.png',
	},
	{
		name: 'Marvin Olson',
		nick: 'Herman LLC',
		text: 'Define has been a game-changer for my startup. They really got what I wanted and helped refine my vision. The design is sleek and user-friendly, and I can’t wait to show it off. The team was friendly and made the process enjoyable.',
		image: './marvin.webp.png',
	},
]
//this file returns comments given to us by clients
export default function Clients() {
	return (
		<div className='max-w-[40rem] mx-auto flex flex-col gap-4'>
			<div className='text-center'>
				<h2 className='text-2xl font-normal mb-3'>Happy clients</h2>
				<p className='text-[#A2A2A2] text-sm'>
					Weve teamed up with clients from all sorts of industries over the
					years. Heres what theyre saying about working with us.
				</p>
			</div>
			<div className='flex flex-col gap-4 mt-2.5'>
				{clients.map(item => (
					<div
						key={item.nick}
						className='flex flex-col gap-4 w-[640px] hover:scale-105 transition-all bg-[#FFFFFF] drop-shadow rounded-2xl py-4 px-3.5'
					>
						<div className='flex justify-between'>
							<div className='flex flex-col text-sm'>
								<span>{item.name}</span>
								<span className='text-[#A2A2A2]'>{item.nick}</span>
							</div>
							<img src={item.image} alt='' />
						</div>
						<span className='text-sm text-[#A2A2A2]'>{item.text}</span>
					</div>
				))}
			</div>

			<div className='grid grid-cols-2 gap-4 '>
				{gridClinet.map(item => (
					<div
						key={item.nick}
						className='flex flex-col gap-4 w-[19.5rem] hover:scale-105 transition-all bg-[#FFFFFF] drop-shadow rounded-2xl h-[14.375rem] py-4 px-3.5'
					>
						<div className='flex justify-between'>
							<div className='flex flex-col text-sm'>
								<span>{item.name}</span>
								<span className='text-[#A2A2A2]'>{item.nick}</span>
							</div>
							<img src={item.image} alt='' />
						</div>
						<span className='text-sm text-[#A2A2A2]'>{item.text}</span>
					</div>
				))}
			</div>
		</div>
	)
}
