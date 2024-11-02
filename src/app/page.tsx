import { CarouselPage } from '@/components/carousel'
import Clients from '@/components/clients'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import HowIt from '@/components/how-it'
import Navbar from '@/components/navbar'
import Pricing from '@/components/pricing'
import WhyUs from '@/components/why-us'

function Home() {
	return (
		<div className='flex flex-col gap-[80px] home mx-auto'>
			<Navbar />
			<Hero />
			<CarouselPage />
			<WhyUs />
			<HowIt />
			<Clients />
			<Pricing />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
