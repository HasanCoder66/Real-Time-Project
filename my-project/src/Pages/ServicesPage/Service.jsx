import React from 'react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import { logoPackage, websitePackage, ecommercePackage } from './DummyServices'
import { useLocation } from 'react-router-dom'

const Service = () => {
    const { pathname } = useLocation();
    const packageName = pathname.split("/")[2]

    // console.log(packageName, "====>>>> package")

    let data = packageName === "logo" ? logoPackage : packageName === "web" ? websitePackage : packageName === "ecommerce" ? ecommercePackage : []

    // console.log(data, "===>>>> data")

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
                    {
                        data.map((item, index) => (
                            <ServiceCard data={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Service