// this file returns information about why you choose us
function WhyUs() {
	return (
		<div className='flex flex-col max-h-[100vh] gap-3 max-w-[40rem] mx-auto'>
			<div className='flex flex-col'>
				<span className='text-2xl text-center'>Why us</span>
				<span className='text-sm text-neutral-400 text-center'>
					Throw your ideas our way, and we’ll take it from there. While we’re
					bringing the product to life, you can stick to doing your thing with
					sales, marketing, and connecting with your users.
				</span>
			</div>
			<div className='flex flex-col items-center justify-center bg-white h-[307px] rounded-2xl py-[10px] px-[56px] overflow-y-auto scrollbar-hidden'>
				<img src='./Before.png' alt='' className='w-[292px] mt-80' />
				<img src='./After.png' alt='' />
			</div>
		</div>
	)
}

export default WhyUs
