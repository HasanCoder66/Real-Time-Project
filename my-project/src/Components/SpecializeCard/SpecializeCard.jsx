import React from "react";
import "./SpecializeCard.css";
const Specialize = ({ data }) => {
  return (
    <>
      <div className="card">
        <h2 className="text-center font-medium text-[#097969] text-[20px]">
          {data?.title}
        </h2>
      </div>
    </>
  );
};

export default Specialize;
