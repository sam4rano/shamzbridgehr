"use client"
import "../style/herosection.css"
import { motion } from "framer-motion";

const Herosection = () => {
  const text = " Seamless Loan !!";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const bgStyle = {
    backgroundImage: `url(${"/images/herosection.png"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };

  return (
    <div
      className="relative flex  w-full sm:flex-col sm:justify-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-40 sm:align-middle sm:items-center sm:w-full sm:h-36"
      style={bgStyle}
    >
      <div className="h-[31rem] sm:h-[20rem] w-1/2  flex flex-col px-4 justify-center align-middle items-center relative sm:w-full gap-4">
        <div className="text-5xl sm:text-3xl font-bold sm:font-semibold z-30 sm:text-center text-white font-nunito sm:w-full">
          Get started with
          <span className="ml-2 text-white font-bold px-4  rounded-bl-xl rounded-tr-xl bg-slate-700 ">
             us
          </span>
        </div>
        <p className="text-3xl sm:text-xl z-30 font-nunito text-white sm:text-center font-bold text-center">
          We offer the best 
          <span className=" px-2">AI-enabled customer-centric</span>solution.
        </p>
        <div className="flex flex-row justify-center gap-4 z-40">
         
          <a
            href="https://wa.me/2348135153620"
            className="flex flex-row justify-center align-middle items-center bg-blue-500 text-white text-xl sm:text-base font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-105 font-nunito"
            target="_blank"
            rel="noopener noreferrer"
          >
            Call Now
          </a>
          <a
            href="tel:+2348135153620"
            className="flex flex-row justify-center align-middle items-center bg-black text-xl sm:text-base font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-white font-nunito"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* <div className=" sm:hidden absolute z-50 left-[60%] top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 bg-green-600 text-white rounded-[20px] font-nunito">
        <motion.div
          className="text-xl sm:text-base font-bold text-white"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={child}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div> */}
    </div>
  );
};

export default Herosection;
