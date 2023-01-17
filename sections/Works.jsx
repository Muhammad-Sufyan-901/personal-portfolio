"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SectionSubtitle, SectionDescription, SectionTitle } from "../components";
import { exprienceList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";
import { SectionWrapper } from "../wrapper";
import { fadeIn, staggerContainer } from "../utils/motion";

function Works() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="p-sectionPadding"
      id="works"
    >
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto lg:my-0 md:my-10 my-6"
      >
        {/* Experience Section Subtitle & Description */}
        <SectionTitle>Works</SectionTitle>
        <SectionSubtitle>Work Experiences</SectionSubtitle>
        <SectionDescription>I'm also experienced at some website development and software testing that i learn for 4 month will described below</SectionDescription>

        {/* Experience Section Content */}
        <motion.div
          variants={fadeIn("right", "tween", 0, 1)}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:w-full w-[80%] lg:mx-0 mx-auto mt-10"
        >
          {exprienceList.map(({ years, work, time, company, description }, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.2, 1)}
              whileHover={{ scale: 1.05 }}
              key={index}
              className={`${theme === "light" ? "bg-white border-primary text-black" : "bg-altSecondary border-altPrimary text-white"} p-[35px] shadow-cardShadow rounded-md border-b-[3px] transition-all duration-300 hover:scale-105`}
            >
              <div className={`${theme === "light" ? "border-light/50" : "border-altLight/50"} flex flex-col leading-[30px] border-b-2 pb-3`}>
                <h4 className="font-bold text-[1.3em]">{work}</h4>
                <h5 className="font-medium text-[0.9em] italic">{time}</h5>
                <span className={`${theme === "light" ? "text-light" : "text-altLight"} font-normal text-[0.9em]`}>{years}</span>
              </div>
              <div className="flex flex-col gap-y-4 mt-4">
                <h4 className={`${theme === "light" ? "bg-primary" : "bg-altPrimary"} py-[5px] px-[15px] text-white w-max text-[1em] font-normal rounded-[5px]`}>{company}</h4>
                <p className="font-normal text-[1em]">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Works, "works");
