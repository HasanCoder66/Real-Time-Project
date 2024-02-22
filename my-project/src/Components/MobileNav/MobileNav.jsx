import React from 'react'
import { XMarkIcon } from "@heroicons/react/20/solid";

const MobileNav = ({ nav, closeNav }) => {
  // const navAnimated = nav? 'block' : 'hidden'
  const navAnimated = nav ? 'translate-x-0' : 'translate-x-[-100%]'
  // console.log(nav);
  // console.log(navAnimated);
  return (
    <div className={`fixed ${navAnimated}  transform transition-all duration-300 top-0 bottom-0 left-0 right-0 z-[1000000] bg-[#18252b]`}>
      <div className="flex z-[1000000] flex-col w-[100vw] h-[100vh] justify-center items-center">
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">Service</div>
        <div className="nav-link-mobile">About</div>
        <div className="nav-link-mobile">Portfolio</div>
        <div className="nav-link-mobile">Contact</div>
        <div className="nav-link-mobile">Toll Free</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 "
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
