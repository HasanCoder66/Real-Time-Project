import React from "react";
import "./SpecializeCard.css";
const Specialize = ({data}) => {
  // const {title, Button} = SpecializeCardData 
  // console.log(data, 'tiltle')
  // console.log(Button, 'Button')
  return (
    <>
      <div className="card">
          <h2 className='text-center font-medium text-yellow-500 text-[20px]'>{data?.title}</h2>
        
{/* <img src="" alt="" /> */}
        <div className="temp-scale">
          <span className="text-[#34afa9]">{data?.Button}</span>
        </div>
      </div>
    </>
  );
};

export default Specialize;
