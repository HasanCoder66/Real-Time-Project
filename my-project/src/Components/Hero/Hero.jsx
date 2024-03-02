import React, { useRef } from "react";
import TextEffect from "../TextEffect/TextEffects";
import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText1 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const yText2 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const yText3 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div className='h-[88vh] bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534584/branding%20hopes/banner_b0pbcx.jpg")] bg-cover bg-center bg-[#18252b] '>
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center overflow-hidden" ref={ref}>
        {/* =========================== */}
        <motion.div style={{ y: yText1 }}>
          <motion.h1 style={{ y: yText2 }} className="text-[35px] md:text-[50px] text-white font-light ">
            WE ARE A RESULT-DRIVEN{" "}
            <motion.div style={{ y: yText1 }} className="text-[#FDDA0D]">
              {" "}
              <TextEffect />
            </motion.div>{" "}
            COMPANY!
          </motion.h1>

          <motion.p style={{ y: yText1 }} className="mt-[1.5rem] text-[20px] text-[#ffffff]">
            Ready to hand over your new project to our masterminds?
          </motion.p>
        </motion.div>
        {/* ============================ */}
      </div>
    </div>
  );
};

export default Hero;
