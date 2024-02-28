import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PackageCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg transition-all ease-in-out duration-200 hover:shadow-md p-6 max-w-[500px] text-[#1e4649] text-left  ">
        <div className="w-[100%] flex items-center justify-center mb-[20px] ">
          <img
            src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534451/branding%20hopes/Marketing-bro_u710jw.svg"
            alt=""
            className="w-[266px] h-[266px]"
          />
        </div>
        <h2 className="text-3xl mb-2 font-medium text-[#097969] text-center">
          Digital Marketing
        </h2>
        <p className="mb-4 text-[16px] text-black  text-center">
          Our team works from scratch using the newest algorithms to crawl,
          index, and rank your site! We create custom, result-oriented social
          media strategies to generate potential leads and drive sales.
        </p>
        <ul className="list-none mb-4 text-[#097969]">
          <li className="text-[16px] flex gap-[10px] mb-[10px]">
            <ArrowForwardIcon className="text-[#FDDA0D]" />
            Pay Per Click (PPC) Services
          </li>
          <li className="text-[16px] flex gap-[10px] mb-[10px]">
            <ArrowForwardIcon className="text-[#FDDA0D]" />
            Search Engine Optimization (SEO)
          </li>
          <li className="text-[16px] flex gap-[10px] mb-[10px]">
            <ArrowForwardIcon className="text-[#FDDA0D]" />
            Social Media Marketing
          </li>
          <li className="text-[16px] flex gap-[10px] mb-[10px]">
            <ArrowForwardIcon className="text-[#FDDA0D]" />
            E-commerce Marketing
          </li>
          <li className="text-[16px] flex gap-[10px] mb-[10px]">
            <ArrowForwardIcon className="text-[#FDDA0D]" />
            Email Marketing
          </li>
        </ul>
      </div>
    </>
  );
};

export default PackageCard;
