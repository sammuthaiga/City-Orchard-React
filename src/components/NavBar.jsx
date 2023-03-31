import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'


const NavBar = () => {
    const[nav , setNav]= useState(false)
    const handleClick = () => setNav(!nav)
  return (
         <div className='w-screen h-[80px] z-10 bg-green-500 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold font-signature mr-6 sm:text-6xl'>City Orchard</h1>
                    <ul className='hidden md:flex ml-16 '>
                        <li className='p-4'>Home</li>
                        <li className='p-4'>Sell</li>
                        <li className='p-4'>Delivery</li>
                        <li className='p-4'>About</li>
                        <li className='p-4'>Contacts</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='group text-white w-fit px-6 py-3 my-2 mr-4 flex items-center rounded-md bg-gradient-to-r
                     from-cyan-500 to-blue-500 cursor-pointer hover:bg-transparent hover:text-green-700'>Sign-In</button>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer hover:bg-transparent hover:text-green-700'>Sign-Up</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                </div>
            </div>


            <ul className={!nav ? 'hidden' : 'absolute bg-green-500 w-full px-8'}>
                <li className='border-b-2 border-black-300 w-full font-bold'>Home</li>
                <li className='border-b-2 border-black-300 w-full font-bold'>Sell</li>
                <li className='border-b-2 border-black-300 w-full font-bold'>Delivery</li>
                <li className='border-b-2 border-black-300 w-full font-bold'>About</li>
                <li className='border-b-2 border-black-300 w-full font-bold'>Contacts</li>
                <div className='flex flex-col my-4'>
                <button className='group text-white w-fit px-6 py-3 my-2 mr-4 flex items-center rounded-md 
                cursor-pointer hover:bg-transparent hover:text-green-700'>Sign-In</button>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                                    bg-gradient-to-r from-green-300 to-blue-200 shadow-xl cursor-pointer hover:bg-transparent hover:text-green-700'>Sign-Out</button>
                </div>
            </ul>
        </div>
  )
}

export default NavBar