import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

const Nav = ({openNav}) => {
   
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]' >
            <h1 className='flex-[0.6] cursor-pointer text[25px] font-bold text-white' >
                Abdul
            <span className='text-yellow-300'>
                Haye 
            </span>
            </h1>
            <div className='nav-link' >HOME</div>
            <div className='nav-link' >ABOUT</div>
            <div className='nav-link' >SERVICES</div>
            <div className='nav-link' >PROJECT</div>
            <div className='nav-link' >BLOG</div>
            <div className='nav-link' >CONTACT</div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] text-yellow-300 cursor-pointer ' />
            </div>
        </div>
    </div>
  )
}

export default Nav