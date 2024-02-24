import React from "react";
import Spinner from "../Spinner/Spinner";
import  Button from "../Button/Button";

const SectionTwo = () => {
  return (
    <div className=" flex w-[100%]  h-[100%]  justify-center items-center flex-col md:flex-row  sm:text-center mt-[3rem] mb-[3rem]">
      <div className=" mt-5 w-[70%] sm:flex-col ">
        <h1 className=" font-bold md:text-[75px]   text-[#097969] text-[55px] mt-[1rem]">STEERING 360 ON DIGITAL AVENUES</h1>
        <p className="sm:text-[15px] md:text-[15px] text-black text-left md:ml-[8rem] sm:w-[100]">
          We believe in transformations and make all accelerations to simplify
          the process and complete each task an easy breeze for you. Our aim is
          simple, to innovate, create and curate perfection through our
          strategic plans for impactful branding and marketing. We believe in a
          whirlpool of creativity to transform your brand towards inclined
          growth.
        </p>
        <div>
        <p className=" text-2xl text-[#097969]font-semibold  md:ml-[8rem] mt-[3rem] mb-[1rem] text-start">Start a Conversation</p>
          <Button text='Talk to an Expert' class='mb-[3rem]'/>
        </div>
          
      </div>
      <div className=" w-[30%] mt-5">
        <Spinner />
      </div>
    </div>
  );
};

export default SectionTwo;
