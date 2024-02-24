import React from "react";
import SectionThreeCard from "../SectionThreeCard/SectionThreeCard";
import cardData from '../SectionThreeCard/cardData'
const SectionThree = () => {
  return (
    <>
      <div className="md:pr-[200px] md:pl-[200px] mb-[2rem]">
        <h1 className="font-bold text-[36px] text-center my-[20px] text-[#1e4649]">
          WEB DEVELOPMENT COMPANY IN NEW YORK CRAFTING DESIGNS THAT SELL
        </h1>
        <p className="md:pr-[200px] md:pl-[200px] font-medium text-center">Tap into a more extensive audience base through our web designs!</p>
        <p className="md:pr-[100px] md:pl-[100px] font-medium text-center sm:px-[20px]">Webdeezien has a team of expert web developers, designers, and product engineers who deal with complex tasks ranging from eCommerce to real estate and other diverse industries, improving the user experience, functionality, and performance. We have always devised result-driven approaches in NYC to gain traffic and increase customer loyalty. This puts us in a better position to create a website according to the client's specific needs and provide valuable insights for their business.</p>
      </div>
      <div className="flex justify-evenly mt-[2rem] mb-[2rem] flex-wrap gap-[20px]">
        {cardData.map((data) => (
          <div >
            <SectionThreeCard data={data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionThree;
