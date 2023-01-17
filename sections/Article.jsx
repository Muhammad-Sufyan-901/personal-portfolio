"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BiTime, BiComment } from "react-icons/bi";
import { SectionTitle, SectionSubtitle, SectionDescription, Button } from "../components";
import { articleList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";
import { SectionWrapper } from "../wrapper";
import { fadeIn, staggerContainer } from "../utils/motion";

function Article() {
  const { theme } = useContext(ThemeContext);

  const truncateString = (string) => {
    const stringLimit = 75;

    if (string.length > stringLimit) {
      return string.slice(0, stringLimit) + "...";
    }

    return string;
  };

  return (
    <section
      className="p-sectionPadding"
      id="article"
    >
      {/* Article Section Title */}
      <SectionTitle>Article</SectionTitle>

      {/* Article Section Container */}
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto"
      >
        {/* Article Section Subtitle & Description */}
        <SectionSubtitle>Article About Programming</SectionSubtitle>
        <SectionDescription>There are some article about programming that i create to add more insight and also to share knowledge</SectionDescription>

        {/* Article Section Content */}
        <motion.div
          variants={fadeIn("right", "tween", 0, 1)}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16 lg:w-full w-[80%] lg:mx-0 mx-auto"
        >
          {articleList.map(({ title, img, uploadedAt, tags, description }, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.1, 1)}
              key={index}
              className={`${theme === "light" ? "bg-white text-black" : "bg-altSecondary text-white"} shadow-cardShadow hover:shadow-xl flex flex-col gap-y-4 rounded-md p-5 transition-all duration-300 group`}
            >
              <div className="h-[200px] overflow-hidden rounded-md relative">
                <img
                  src={img}
                  alt="Article Banner"
                  className="w-full h-full rounded-md group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute top-[-100%] group-hover:top-2 left-2 transition-all duration-300">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className={`${theme === "light" ? "bg-primary" : "bg-altPrimary"} text-white font-medium text-[0.8em] px-2 py-1 rounded-md`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-[0.85em]">
                  <BiTime /> {uploadedAt}
                </div>
                <div className="flex items-center cursor-pointer">
                  <BiComment />
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <h4 className={`${theme === "light" ? "hover:text-primary" : "hover:text-altPrimary"} font-semibold text-[1em] cursor-pointer transition-all duration-300`}>{title}</h4>
                <p className="font-normal text-[0.9em]">{truncateString(description)}</p>
              </div>
              <Button
                href={"/"}
                type="primary"
                size="small"
                className="rounded-md w-fit"
              >
                Read More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Article, "article");
