import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PackageCard = () => {
    return (
        <>
            <div className="bg-white rounded-lg transition-all ease-in-out duration-200 hover:shadow-md p-6 max-w-[500px] text-[#1e4649] text-left p-[50px] ">
                <div className='w-[100%] flex items-center justify-center mb-[20px] '>
                    <img src="./images/Marketing-bro.svg" alt="" className='w-[266px] h-[266px]' />
                </div>
                <h2 className="text-3xl mb-2 font-medium">Digital Marketing</h2>
                <p className="mb-4 text-[16px] text-[#1e4649]">
                    Our team works from scratch using the newest algorithms to crawl, index, and rank your site! We create custom, result-oriented social media strategies to generate potential leads and drive sales.
                </p>
                <ul className="list-none mb-4 text-[#34afa9]">
                    <li className="text-[16px] flex gap-[10px] mb-[10px]"><ArrowForwardIcon />Pay Per Click (PPC) Services</li>
                    <li className="text-[16px] flex gap-[10px] mb-[10px]"><ArrowForwardIcon />Search Engine Optimization (SEO)</li>
                    <li className="text-[16px] flex gap-[10px] mb-[10px]"><ArrowForwardIcon />Social Media Marketing</li>
                    <li className="text-[16px] flex gap-[10px] mb-[10px]"><ArrowForwardIcon />E-commerce Marketing</li>
                    <li className="text-[16px] flex gap-[10px] mb-[10px]"><ArrowForwardIcon />Email Marketing</li>
                </ul>
            </div>
        </>
    )
}

export default PackageCard