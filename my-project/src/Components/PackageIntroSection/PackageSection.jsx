import React from 'react'
import PackageCard from '../PackageCard/PackageCard'

const PackageSection = () => {
    return (
        <div className='p-[60px] bg-yellow-500'>
            <h1 className='font-bold text-[36px] text-center my-[20px] text-[#1e4649]'>LET'S HAVE A LOOK AT WHAT GOES INTO ACCELERATING THE BUSINESS GROWTH OF OUR CLIENTS</h1>
            <div className='flex gap-[10px] justify-evenly flex-col lg:flex-row '>
                <PackageCard />
                <PackageCard />
                <PackageCard />
            </div>
        </div>
    )
}

export default PackageSection