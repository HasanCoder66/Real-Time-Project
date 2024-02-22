import React from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

const ServiceCard = () => {
    return (
        <div className='SCradContainer rounded-xl border-2 border-[#34afa9] max-w-[400px] mt-[15px] me-[15px] mb-[15px] hover:scale-[1.05] transition-all ease-in-out duration-300'>
            <div className="SCardWrapper">
                <div className="title text-center py-[10px] px-[20px]">
                    <div className='text-white text-[12px] font-bold'>BASIC LOGO</div>
                    <div className='text-white text-[12px] font-bold'>PACKAGE</div>
                    <div className='text-[#b3b3b3] text-[12px] my-[5px]'>
                        Suitable for potential super-startups and brand revamps for companies.
                    </div>
                </div>
                <div className="price flex items-center justify-center">
                    <p className='text-[50px] font-bold text-transparent' style={{ WebkitTextStroke: "1px #34afa9" }}>$34.99</p>
                </div>
                <div className="desc py-[16px] pe-[10px]">
                    <ul className='px-[25px] text-[#818181]'>
                        <li className='my-[10px] flex items-center gap-[15px]'><CheckCircleOutlinedIcon className='text-[#34afa9]' />3 Logo Design Concepts</li>
                        <li className='my-[10px] flex items-center gap-[15px]'><CheckCircleOutlinedIcon className='text-[#34afa9]' />3 Logo Design Concepts</li>
                        <li className='my-[10px] flex items-center gap-[15px]'><CheckCircleOutlinedIcon className='text-[#34afa9]' />3 Logo Design Concepts</li>
                        <li className='my-[10px] flex items-center gap-[15px]'><CheckCircleOutlinedIcon className='text-[#34afa9]' />3 Logo Design Concepts</li>
                        <li className='my-[10px] flex items-center gap-[15px]'><CheckCircleOutlinedIcon className='text-[#34afa9]' />3 Logo Design Concepts</li>
                        <li className='my-[10px] flex items-center gap-[15px]'><CheckCircleOutlinedIcon className='text-[#34afa9]' />3 Logo Design Concepts</li>
                    </ul>
                </div>
                <div className="assurance flex items-center justify-center gap-[10px] text-white bg-[#34afa9] py-[10px] px-[38px]">
                    <CheckCircleOutlinedIcon /> 100% Approval Assurance
                </div>
                <div className="btns flex items-center justify-evenly m-[15px]">
                    <button className='text-white border-[1px] border-[#34afa9] py-[5px] px-[30px] flex items-center gap-[5px] rounded-full transition-all ease-in-out duration-300 hover:bg-black hover:border-none'>
                        <ShoppingCartIcon /> PURCHASE
                    </button>
                    <div>
                        <p className='text-[#6c6565] text-[12px]'>Click here to</p>
                        <p className='text-[#34afa9] text-[12px]'><SmsOutlinedIcon /> Live chat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard