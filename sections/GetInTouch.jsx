"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "../components";
import { ThemeContext } from "../context/ThemeContext";
import { slideIn, staggerContainer } from "../utils/motion";

function GetInTouch() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="max-w-[1150px] w-full mx-auto relative px-8 pt-24 pb-8">
      {/* Get In Touch Container */}
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="flex justify-center items-center w-full"
      >
        {/* Get In Touch Box */}
        <motion.div
          variants={slideIn("right", "tween", 0, 0.75)}
          className={`${
            theme === "light" ? "bg-white border-primary text-black" : "bg-altSecondary border-altPrimary text-white"
          } flex justify-center lg:flex-row flex-col items-center gap-x-[50px] relative w-[90%] shadow-cardShadow p-[50px] rounded-[10px] border-b-[3px] transition-all duration-300`}
        >
          {/* Get In Touch Text Content */}
          <div className="uppercase leading-[60px] lg:text-start text-center lg:mb-0 mb-8">
            <h4 className="lg:text-[1.2em] text-[1em] font-light leading-5">Let's Talk</h4>
            <h3 className="lg:text-[2.3em] text-[2em] font-normal">About your</h3>
            <h2 className={`${theme === "light" ? "to-black" : "to-white"} lg:text-[4.2em] text-[3em] font-bold bg-gradient-to-t from-transparent bg-clip-text text-transparent opacity-[0.9]`}>Next Project</h2>
          </div>

          {/* Get In Touch Button */}
          <Button
            href={"/#contact"}
            type="primary"
            size="normal"
            className="flex items-center gap-x-2 rounded-md xl:px-6 lg:px-4 xl:text-[1em] text-[0.8em]"
          >
            Get In Touch <FaPaperPlane />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default GetInTouch;
