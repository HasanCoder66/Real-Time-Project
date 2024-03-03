import React from "react";
import PortCard from "../../Components/PortfolioCard/PortCard";
import cardDataPort from "../../Components/PortfolioCard/cardDataPort";

const Port = () => {
  return (
    <div className="bg-[#097969]  pb-[4.5rem]">
      <div className="lg:p-[60px] bg-[#097969]">
        <h1 className="font-bold text-[36px] text-center my-[20px] text-white">
          OUR <span className="text-[#FDDA0D]">WORK</span> FOR OUR CLIENTS
        </h1>
        <p className="text-white text-center mb-[4rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellat
          porro autem consequatur reprehenderit, esse eveniet officia, maiores
          ab ut et expedita tempore in natus.
        </p>
        <div className="flex justify-evenly mt-[2rem]  flex-wrap gap-[20px]">
          {cardDataPort.map((data) => (
            <div className="hover:scale-[1.05] transition-all ease-in-out duration-300">
              <PortCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Port;
