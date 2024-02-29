import React from "react";
import TextEffect from "../TextEffect/TextEffects";

const Hero = () => {
  return (
    <div className='h-[88vh] bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534584/branding%20hopes/banner_b0pbcx.jpg")]  mt-[10vh] bg-cover bg-center bg-[#18252b] '>
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-light ">
            WE ARE A RESULT-DRIVEN{" "}
            <div className="text-[#FDDA0D]">
              {" "}
              <TextEffect />
            </div>{" "}
            COMPANY!
          </h1>

          <p className="mt-[1.5rem] text-[20px] text-[#ffffff]">
            Ready to hand over your new project to our masterminds?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
