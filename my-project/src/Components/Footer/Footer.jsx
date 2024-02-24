import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapLocation from '../MapLocation/MapLocation';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer bg-[#18252b] z-[10]'>
            <div className="footerWrapper py-[95px] px-[46px] text-white flex flex-col gap-[40px] ">
                <div className='flex p-[10px] lg:flex-row md:flex-col sm:flex-col topBox'>
                    <div className="left flex-1 px-[16px]">
                        <h1 className='text-[46px] font-normal digitalText'>Let’s Build Your Next Digital Product</h1>
                        <p className='text-[23px] font-light text-[#34afa9] digitalText2'>Turn your ideas into reality in just a span of 4-12 weeks! Kickstart your project with us now and revamp your results.</p>
                    </div>
                    <div className="right flex-1 flex justify-end items-center px-[16px]">
                        <button className='py-[17px] px-[39px] bg-[#34afa9] font-bold'>Talk to an Expert</button>
                    </div>
                </div>

                <div className='p-[10px] flex lg:flex-row md:flex-col sm:flex-col midBox'>
                    <div className='left flex flex-col flex-1 gap-[15px] px-[16px]'>
                        <h1 className='text-[46px]'>LOGO HERE</h1>
                        <p className='text-[16px] text-[#34afa9]'>The ultimate all-service agency ready to simplify your project needs and curate results fit for your digital needs and niche.</p>
                        <div className='flex items-center gap-[10px]'>
                            <FacebookIcon className='cursor-pointer' />
                            <InstagramIcon className='cursor-pointer' />
                            <LinkedInIcon className='cursor-pointer' />
                            <PinterestIcon className='cursor-pointer' />
                        </div>
                    </div>

                    <div className='center flex flex-col flex-1 px-[16px] justify-between '>
                        <p className='text-[18px] text-[#34afa9] mb-[10px]'>Services</p>
                        <p className='text-[16px] cursor-pointer'>Web Design</p>
                        <p className='text-[16px] cursor-pointer'>Digital Marketing</p>
                        <p className='text-[16px] cursor-pointer'>Graphic Design</p>
                        <p className='text-[16px] cursor-pointer'>AI</p>
                        <p className='text-[16px] cursor-pointer'>Video Editing</p>
                        {/* <p className='text-[16px] cursor-pointer'>Digital Marketing</p>
                        <p className='text-[16px] cursor-pointer'>Digital Marketing</p> */}
                    </div>
                    <div className='right px-[16px] flex-1'>
                        <p className='text-[18px] text-[#34afa9] mb-[10px]'>Find Us</p>
                        <MapLocation />
                        {/* <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.354153042275!2d-97.63327272475347!3d35.594329634743694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2035dabef00bb%3A0xa5f7eb1a20a89c35!2s6605%20NW%20121st%20St%2C%20Oklahoma%20City%2C%20OK%2073162%2C%20USA!5e0!3m2!1sen!2s!4v1708673658507!5m2!1sen!2s" width="250" height="250" style={{ border: "0px", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}
                    </div>
                </div>

                <div className='p-[10px] flex lg:flex-row md:flex-col sm:flex-col bottomBox'>
                    <div className="left flex-1 px-[16px]">
                        <div className="flex text-[#34afa9] gap-[5px] items-center mb-[15px]">
                            <PhoneIcon />
                            <span>Contact Us</span>
                        </div>
                        <p>(507) 623-2311
                        </p>
                    </div>
                    <div className="center flex-1 px-[16px]">
                        <div className="flex text-[#34afa9] gap-[5px] items-center mb-[15px]">
                            <AlternateEmailIcon />
                            <span>Email Us</span>
                        </div>
                        <a>Info@webdeezien.com</a>
                    </div>
                    <div className="right flex-1 px-[16px]">
                        <div className="flex text-[#34afa9] gap-[5px] items-center mb-[15px]">
                            <LocationOnIcon />
                            <span>Address</span>
                        </div>
                        <p>6605 NW 121st Street Oklahoma City, Ok. 73162</p>
                    </div>
                </div>
            </div>

            <div className='py-[20px] flex copyright'>
                <div className='mx-auto text-white'>
                    webdeezien © 2024 All Rights Reserved
                </div>
                <div className='mx-auto text-[grey]'>
                    Terms & Conditions
                </div>
            </div>
        </div>
    )
}

export default Footer