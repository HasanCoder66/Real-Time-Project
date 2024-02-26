import React from "react";
import InputCmp from "../InputCmp/InputCmp";
import TextareaCmp from "../TextAreaCmp/TextAreaCmp";

const GetConsultant = () => {
  return (
    <div className='lg:p-[5rem] lg:pr-[5rem] px-[2rem] pb-[3rem] h-[100vh] bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534584/branding%20hopes/banner_b0pbcx.jpg")]  pt-[12vh] bg-cover bg-center bg-[#18252b] '>
      <div>
        <h1 className="text-[35px] md:text-[50px] text-yellow-300  font-bold ">
          Get
          <span className="text-[#34afa9]"> Free</span>
          <span className="text-white"> Consultancy!</span>
        </h1>
        {/* <TextEffect /> */}
        <p className="mt-[1.5rem] text-[20px] text-[#ffffff]">
          We have experts available to provide guidance for you.
        </p>
        <div className="flex lg:flex-row flex-col mt-[2rem] gap-5">
          <InputCmp type="text" label="Enter Your Name" />
          <InputCmp type="Number" label="Enter Your Number" />
          <InputCmp type="email" label="Enter Your email" />
        </div>
        <div className="mt-[2rem]">
          <TextareaCmp />
        </div>
        <div className="right flex-1 flex justify-start items-center lg:mt-[2rem] mt-[20px]">
          <button className="py-[17px] px-[39px]  bg-[#34afa9]  hover:text-white font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetConsultant;
