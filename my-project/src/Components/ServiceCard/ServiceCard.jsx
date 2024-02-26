import React from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

const ServiceCard = ({ data }) => {

    // console.log(data, "=====>>>> data from crad")

    const { desc } = data

    // console.log(desc)

    return (
        <div className='SCradContainer rounded-xl border-4 border-[#fdda0d] bg-white max-w-[400px] mt-[15px] me-[15px] mb-[15px] hover:scale-[1.05] transition-all ease-in-out duration-300'>
            <div className="SCardWrapper">
                <div className="title text-center py-[10px] px-[20px]">
                    <div className='text-black text-[12px] font-bold'>{data?.title}</div>
                    <div className='text-black text-[12px] font-bold'>PACKAGE</div>
                    <div className='text-black text-[12px] my-[5px]'>
                        Suitable for potential super-startups and brand revamps for companies.
                    </div>
                </div>
                <div className="price flex items-center justify-center">
                    <p className='text-[50px] font-bold text-transparent' style={{ WebkitTextStroke: "1px #fdda0d" }}>{`$${data?.price}`}</p>
                </div>
                <div className="desc py-[16px] pe-[10px]">
                    <ul className='px-[25px] text-[#818181]'>
                        {
                            desc.map((data)=> (
                                <li className='my-[10px] flex items-center gap-[15px]'><CheckCircleOutlinedIcon className='text-[#097969]' />{data}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="assurance flex items-center justify-center gap-[10px] text-white bg-[#097969] py-[10px] px-[38px]">
                    <CheckCircleOutlinedIcon className='text-white'/> 100% Approval Assurance
                </div>
                <div className="btns flex items-center justify-evenly m-[15px]">
                    <button className='text-[#fdda0d]  border-[1px] border-[#097969] py-[5px] px-[30px] flex items-center gap-[5px] rounded-full transition-all ease-in-out duration-300 hover:bg-[#097969]  hover:border-none'>
                        <ShoppingCartIcon /> PURCHASE
                    </button>
                    {/* <div>
                        <p className='text-[#6c6565] text-[12px]'>Click here to</p>
                        <p className='text-[#34afa9] text-[12px]'><SmsOutlinedIcon /> Live chat</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard