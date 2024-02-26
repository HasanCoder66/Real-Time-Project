import React from 'react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import { logoPackage, websitePackage, ecommercePackage } from './DummyServices'
import { useLocation } from 'react-router-dom'
import GetConsultant from '../GetConsultPage/GetConsultant'

const Service = () => {
    const { pathname } = useLocation();
    const packageName = pathname.split("/")[2]

    // console.log(packageName, "====>>>> package")

    let data = packageName === "logo" ? logoPackage : packageName === "web" ? websitePackage : packageName === "ecommerce" ? ecommercePackage : []

    // console.log(data, "===>>>> data")

    return (
        <div className='serviceContainer bg-[#097969] mt-[75px]'>
            <div className='serviceWrapper py-[150px] px-[76px]'>
                <div className='mb-[30px]'>
                    <h1 className='text-[40px] font-bold text-white'>
                    <span className='text-[#fdda0d]'>Affordable</span> Packages for Your <span className='text-[#fdda0d]'>Business</span>
                    </h1>
                    <p className='text-[16px] text-white'>We offer high-quality logo design packages to satisfy your business demands while meeting your budget.</p>
                </div>
                <div className='flex flex-wrap justify-evenly'>
                    {
                        data.map((item, index) => (
                            <ServiceCard data={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <GetConsultant />
        </div>
    )
}

export default Service