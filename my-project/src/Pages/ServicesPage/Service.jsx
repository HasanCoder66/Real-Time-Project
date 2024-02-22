import React from 'react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'

const Service = () => {
    return (
        <div className='serviceContainer bg-[#18252b] mt-[80px]'>
            <div className='serviceWrapper py-[150px] px-[76px]'>
                <div className='mb-[30px]'>
                    <h1 className='text-[40px] font-bold text-white'>
                        <span className='text-[#34afa9]'>Affordable</span> Packages for Your Business
                    </h1>
                    <p className='text-[16px] text-white'>We offer high-quality logo design packages to satisfy your business demands while meeting your budget.</p>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    )
}

export default Service