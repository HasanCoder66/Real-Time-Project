import React from "react";
// import Particle from './Particle'
import TextEffect from '../TextEffect/TextEffects'
// import Image from "next/image";
// import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Particle from "../Particles/Particles";
// import Button from "../Button/Button";
import { Parallax } from "react-parallax";
const Hero = () => {
  return (
    // bg-[url("/images/banner.jpg")]
    <Parallax strength={600} bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HCz26hsWhLfQygKl_JITj5NJ4Lnnk0bW29sr4kLxgg&s'>
                
    <div className='h-[88vh] bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534584/branding%20hopes/banner_b0pbcx.jpg")]  mt-[10vh] bg-cover bg-center bg-[#18252b] '>
      {/* <Particle /> */}
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-light ">
            WE ARE A RESULT-DRIVEN{" "}
            <span className="text-[#FDDA0D]"> <TextEffect /></span> COMPANY!
          </h1>
          
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff]">
            Ready to hand over your new project to our masterminds?
          </p>
          {/* <div className="flex mt-[2rem] gap-[5rem]">
            <Button text="Get Started" />
            <Button text="Our Services" />
          </div> */}
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Hero;
