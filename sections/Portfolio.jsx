"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle, SectionSubtitle, SectionDescription, Button, Modal } from "../components";
import { portfolioList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";
import { SectionWrapper } from "../wrapper";
import { fadeIn, staggerContainer } from "../utils/motion";

function Portfolio() {
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    selectedModal: null,
  });
  const { theme } = useContext(ThemeContext);

  const handleOpenModal = (index) => setOpenModal({ isOpen: true, selectedModal: index });

  const handleCloseModal = () => setOpenModal({ isOpen: false, selectedModal: null });

  const handleRenderModal = () => {
    const { isOpen, selectedModal } = openModal;

    if (selectedModal !== null) {
      const { title, subtitle, img, description } = portfolioList[selectedModal];

      return (
        <Modal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          title={title}
          subtitle={subtitle}
          img={img}
          description={description}
        />
      );
    }
  };

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
      id="portfolio"
    >
      {/* Portfolio Section Title */}
      <SectionTitle>Portfolio</SectionTitle>

      {/* Portfolio Section Container */}
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto"
      >
        {/* Portfolio Section Subtitle & Description */}
        <SectionSubtitle>Project i'm created</SectionSubtitle>
        <SectionDescription>I'm created a few project while i'm learing about frontend development. and the project i'll explain below</SectionDescription>

        {/* Portfolio Section Content */}
        <motion.div
          variants={fadeIn("right", "tween", 0, 1)}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-full w-[80%] lg:mx-0 mx-auto gap-10 mt-16"
        >
          {portfolioList.map(({ title, subtitle, img, description }, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.1, 1)}
              key={index}
              className={`${
                theme === "light" ? "bg-white hover:border-primary text-black" : "bg-altSecondary hover:border-altPrimary text-white border-transparent"
              } p-5 shadow-cardShadow flex flex-col gap-y-4 rounded-lg border-[1.5px] transition-all duration-300 group`}
            >
              <div className={`${theme === "light" ? "" : "border-altLight"} overflow-hidden rounded-xl h-[250px] border-[3px]`}>
                <img
                  src={img}
                  alt="Portfolio Banner"
                  className="h-full w-full object-cover rounded-[9px] transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <h3 className="font-semibold xl:text-[1.2em] lg:text-[1.1em] text-[1em]">{title}</h3>
                <h4 className={`${theme === "light" ? "text-light" : "text-altLight"} font-medium xl:text-[1em] text-[0.85em]`}>{subtitle}</h4>
                <p className="font-normal text-[0.9em]">{truncateString(description)}</p>
              </div>
              <div className="flex items-center gap-x-5 xl:max-w-[85%] w-full mt-4">
                <Button
                  href={"/"}
                  onClick={() => handleOpenModal(index)}
                  type="primary"
                  size="small"
                  className="rounded-md font-medium text-center"
                >
                  View More
                </Button>
                <Button
                  href={"/"}
                  type="outline-primary"
                  size="small"
                  className="rounded-md font-medium text-center"
                >
                  Live Preview
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Modal Render */}
        <React.Fragment>{handleRenderModal()}</React.Fragment>

        {/* View All Portfolio Button */}
        <motion.div
          variants={fadeIn("up", "tween", 1.25, 0.5)}
          className="flex justify-center items-center w-full mt-10"
        >
          <Button
            href={"/portfolio"}
            scroll={true}
            type="primary"
            size="normal"
            className="rounded-md shadow-lg"
          >
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Portfolio, "portfolio");
