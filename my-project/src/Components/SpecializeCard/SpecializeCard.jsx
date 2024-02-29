import React from "react";
import "./SpecializeCard.css";
import { Fade } from "react-awesome-reveal";
const Specialize = ({ data }) => {
  return (
    <>
      <Fade cascade damping={0.4} direction="up" triggerOnce>
        <div className="card">
          <h2 className="text-center font-medium text-[#097969] text-[20px]">
            {data?.title}
          </h2>
        </div>
      </Fade>
    </>
  );
};

export default Specialize;
