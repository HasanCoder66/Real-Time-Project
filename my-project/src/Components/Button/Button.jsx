import React from "react";

const Button = ({text , }) => {
  // class
  // const classy = class ? hasan 
  return (
    <div className={`w-full h-[40] flex items-center md:ml-[8rem] cursor-pointer `}>
      <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-yellow-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#097969] dark:text-white dark:hover:text-black dark:shadow-none group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#FDDA0D] group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            class="w-5 h-5 text-[#FDDA0D]"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            class="w-5 h-5 text-[#097969]"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white  dark:group-hover:text-gray-200">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Button;
