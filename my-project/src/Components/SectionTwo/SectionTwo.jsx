import React from "react";
import Spinner from "../Spinner/Spinner";
import  Button  from "../Button/Button";

const SectionTwo = () => {
  return (
    <div className=" flex w-[100%]  h-[100%]   ">
      <div className=" mt-5 w-[60%] sm:flex-col">
        <h1 className="text-[35px] md:text-[75px] text-[#18252b] font-bold md:ml-[8rem]  sm:w-[100%] sm:text-[55px] ">STEERING 360 ON DIGITAL AVENUES</h1>
        <p className="sm:text-[15px] md:text-[15px] text-[#18252b]  md:ml-[8rem]">
          We believe in transformations and make all accelerations to simplify
          the process and complete each task an easy breeze for you. Our aim is
          simple, to innovate, create and curate perfection through our
          strategic plans for impactful branding and marketing. We believe in a
          whirlpool of creativity to transform your brand towards inclined
          growth.
        </p>
        <div>
        <p className="text-[5px] md:text-[35px] text-[#18252b] font-semibold mb-1 md:ml-[8rem] mt-[3rem] sm:text-[25px]">Start a Conversation</p>
          <Button />
        </div>
          
      </div>
      <div className=" w-[40%] mt-5 ">
        <Spinner />
      </div>
    </div>
  );
};

export default SectionTwo;
