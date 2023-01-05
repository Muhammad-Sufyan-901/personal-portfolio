"use client";

import React, { useContext } from "react";
import { AiFillTrophy } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { SectionTitle, SectionSubtitle } from "../components";
import { educationList, skillsList, awardList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";

export default function Experiences() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="p-sectionPadding"
      id="experiences"
    >
      {/* Experiences Section Container */}
      <div className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto flex flex-col gap-y-20">
        {/* Experiences Section Title */}
        <div>
          <SectionTitle>Experiences</SectionTitle>
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-[65%_25%] grid-cols-1 lg:gap-[10%] gap-10">
          {/* Skills Section Content */}
          <div
            className={`${
              theme === "light" ? "bg-white text-black" : "bg-altSecondary text-white"
            } shadow-cardShadow p-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 lg:w-full w-[80%] lg:mx-0 mx-auto place-items-center rounded-lg lg:order-1 order-2 transition-all duration-300 hover:shadow-2xl`}
          >
            {skillsList.map(({ SkillIcon, title, level }, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-y-3 group cursor-pointer"
              >
                <div className={`${theme === "light" ? "bg-white/80 text-primary" : "bg-altSecondary/30 text-altPrimary"} p-5 shadow-md w-fit rounded-full transition-all duration-300 group-hover:-translate-y-2`}>
                  <SkillIcon className="text-[2rem]" />
                </div>
                <div className="flex flex-col gap-y-2 text-center">
                  <h3 className="font-semibold lg:text-[1em] text-[0.9em]">{title}</h3>
                  <h4 className={`${theme === "light" ? "text-light" : "text-altLight"} font-normal`}>{level}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section Subtitle */}
          <div className="flex flex-col justify-center items-center lg:order-2 order-1 lg:text-end text-center">
            <SectionSubtitle className="lg:text-end text-end">Skills & Tech Stack</SectionSubtitle>
            <p className={`${theme === "light" ? "text-black" : "text-white"} font-normal lg:max-w-[750px] md:max-w-[650px] md:text-[1em] text-[0.9em] lg:text-end text-center`}>
              There are some skills that i've learning and experienced below
            </p>
          </div>
        </div>

        {/* Educations & Awards Section */}
        <div className="grid lg:grid-cols-[25%_65%] grid-cols-1 lg:gap-[10%] gap-10">
          {/* Educations & Awards Section Subtitle */}
          <div className="flex flex-col justify-center items-center order-1 lg:text-start text-center">
            <SectionSubtitle className="lg:text-start">Educations & Awards</SectionSubtitle>
            <p className={`${theme === "light" ? "text-black" : "text-white"} font-normal lg:max-w-[750px] md:max-w-[650px] md:text-[1em] text-[0.9em] lg:text-start text-center`}>
              There are some formal education & awards that i've reached below
            </p>
          </div>

          {/* Educations & Awards Content */}
          <div
            className={`${
              theme === "light" ? "bg-white text-black" : "bg-altSecondary text-white"
            } shadow-cardShadow p-10 grid lg:grid-cols-2 grid-cols-1 gap-8 rounded-lg lg:w-full w-[80%] lg:mx-0 mx-auto order-2 transition-all duration-300 hover:shadow-2xl`}
          >
            {/* Educations Content */}
            <div className="flex flex-col gap-y-6">
              <h3 className={`${theme === "light" ? "bg-primary" : "bg-altPrimary"} font-medium text-white px-3 py-1 w-fit rounded-md flex items-center gap-x-2 transition-all duration-300 hover:-translate-y-2`}>
                <MdOutlineSchool /> Educations
              </h3>
              {educationList.map(({ years, school, competence }, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-2 pb-2"
                >
                  <h3 className="font-semibold text-[1em]">{school}</h3>
                  <h4 className="font-medium text-[0.9em]">{competence}</h4>
                  <span className={`${theme === "light" ? "text-light" : "text-altLight"} font-normal`}>{years}</span>
                </div>
              ))}
            </div>

            {/* Awards Content */}
            <div className="flex flex-col gap-y-6">
              <h3 className={`${theme === "light" ? "bg-primary" : "bg-altPrimary"} font-medium text-white px-3 py-1 w-fit rounded-md flex items-center gap-x-2 transition-all duration-300 hover:-translate-y-2`}>
                <AiFillTrophy /> Awards
              </h3>
              {awardList.map(({ years, award, place }, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-2 pb-2"
                >
                  <h3 className="font-semibold text-[1em]">{award}</h3>
                  <h4 className="font-medium text-[0.9em]">{place}</h4>
                  <span className={`${theme === "light" ? "text-light" : "text-altLight"} font-normal`}>{years}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
