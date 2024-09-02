import React from 'react'
import logo from '../assets/logo.png'
import globe from '../assets/world.png'
import arrow from '../assets/arrow.png'

function NavBar() {
  return (
    <div className='h-16 w-screen flex px-32 justify-between items-center bg-white fixed'>
        <div className='flex items-center h-12 gap-4'>
            <img src={logo} className='w-28 h-11'/>
            <span className='border h-full border-gray'></span>
            <h1 className='font-semibold text-xl'>Members Directory</h1>
        </div>
        <div className='gap-2 flex'>
            <button className='w-44 h-11 bg-lightBlue text-white flex items-center justify-center gap-1 text-sm font-semibold rounded-lg'>
                <p>Visit Website</p>
                <img src={globe} className='w-4 h-4'/>
            </button>
            <button className='w-44 h-11 bg-black text-white flex items-center justify-center gap-1 text-sm font-semibold rounded-lg'>
                <p>Become a Volunteer</p>
                <img src={arrow} className='w-4 h-4'/>
            </button>
        </div>
    </div>
  )
}

export default NavBar