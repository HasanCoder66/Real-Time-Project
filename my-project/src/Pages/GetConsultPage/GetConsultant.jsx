import React, { useRef } from "react";
import InputCmp from "../../Components/InputCmp/InputCmp";
import TextareaCmp from "../../Components/TextAreaCmp/TextAreaCmp";

const GetConsultant = () => {
  const form = useRef();

  // ==================================EmailJS function ==============================//

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("Your service ID", "Your template ID", form.current, {
        publicKey: "Your public key",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email Send Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Email Send Failed");
        }
      );
  };
  // ==================================EmailJS function ==============================//
  return (
    <div className='lg:p-[5rem] lg:pr-[5rem] px-[2rem] pb-[3rem] h-[100vh] bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534584/branding%20hopes/banner_b0pbcx.jpg")]  pt-[12vh] bg-cover bg-center bg-[#18252b] '>
      <div>
        <h1 className="text-[35px] md:text-[50px] text-[#FDDA0D]  font-bold ">
          Get
          <span className="text-white"> Free</span>
          <span className=" text-[#097969]"> Consultancy!</span>
        </h1>
        <p className="mt-[1.5rem] text-[20px] text-[#ffffff]">
          We have experts available to provide guidance for you.
        </p>
        <div className="flex lg:flex-row flex-col mt-[2rem] gap-5 ">
        
            <input type="text" placeholder="Full Name" name="name"  className="p-[30px]"/>
            <input type="email" placeholder="Email Address" name="email" />
            <input type="email" placeholder="Mobile Number" name="number" />
          
        </div>
        <div className="mt-[2rem]">
          {/* <TextareaCmp ref={form}/> */}
        </div>
        <div className="right flex-1 flex justify-start items-center mt-[2rem]">
          <button
            onClick={sendEmail}
            className="py-[17px] px-[39px]  bg-[#fdda0d]  hover:text-white font-bold hover:bg-[#097969]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetConsultant;
