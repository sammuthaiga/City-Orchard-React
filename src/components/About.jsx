import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
            <h2 className='text-5xl font-bold text-white'>Bringing you the best fresh from the farm.</h2>
            <p className='text-3xl py-6 text-green-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ducimus optio dolore quia voluptates porro molestias error ullam accusantium distinctio.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2'>
                <div className='border py-8 rounded-xl bg-gradient-to-r from-green-300 to-blue-200 shadow-xl'>
                    <p className='text-black text-4xl text-center font-signature font-bold'>100%</p>
                    <p className='text-black text-4xl text-center font-signature font-bold'>Fresh</p>
                </div>
                <div className='border py-8 rounded-xl bg-gradient-to-r from-green-300 to-blue-200 shadow-xl'>
                    <p className='text-black text-4xl text-center font-signature font-bold'>24/7</p>
                    <p className='text-black text-4xl text-center font-signature font-bold'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl bg-gradient-to-r from-green-300 to-blue-200 shadow-xl'>
                    <p className='text-black text-4xl text-center font-signature font-bold'>150k+</p>
                    <p className='text-black text-4xl text-center font-signature font-bold'>Sales</p>
                </div>
            </div>


        </div>

    </div>
  )
}

export default About