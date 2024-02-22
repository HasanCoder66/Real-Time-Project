import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

const Nav = ({ openNav }) => {

    return (
        <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#18252b] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]' >
                <h1 className='flex-[0.6] cursor-pointer text-[25px] font-bold text-white ' >
                web
                    <span className='text-yellow-300 text-[25px] hover:text-[#34afa9]'>
                    deezien
                    </span>
                </h1>
                <div className='nav-link' >Home</div>
                <div className='nav-link' >Service</div>
                <div className='nav-link' >About</div>
                <div className='nav-link' >Portfolio</div>
                <div className='nav-link' >Contact</div>
                <div className='nav-link' >Toll Free</div>
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] text-yellow-300 cursor-pointer ' />
                </div>
            </div>
        </div>
    )
}

export default Nav