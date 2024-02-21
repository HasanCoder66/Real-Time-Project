import React from 'react'
import Specialize from '../SpecializeCard/SpecializeCard'

const WeSpecialize = () => {
  return (
    <div className=' bg-[#34afa9] pt-[2rem]'>
        <div>
            <h1 className='text-center font-bold text-3xl text-white'>Working On</h1>
            <h1 className='text-center font-bold text-6xl text-white'>WE SPECIALIZE IN VARIOUS CMS</h1>
        </div>
        <div className='flex  justify-evenly flex-wrap gap-5 p-[50px]'>
            <Specialize />
            <Specialize />
            <Specialize />
            <Specialize />
            <Specialize />
            <Specialize />
            <Specialize />
            
            
            
            
        </div>
    </div>
  )
}

export default WeSpecialize