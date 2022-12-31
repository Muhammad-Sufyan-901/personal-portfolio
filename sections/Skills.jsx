"use client";

import React from "react";
import { SectionTitle, SectionSubtitle, SectionDescription } from "../components";
import { educationList, skillsList, awardList } from "../constants/data";

export default function Skills() {
  return (
    <section
      className="p-sectionPadding"
      id="skills"
    >
      {/* Skills Section Container */}
      <div className="max-w-sectionWidth mx-auto">
        {/* Skills Section Title, Subtitle & Description */}
        <SectionTitle>Skills</SectionTitle>
        <SectionSubtitle>Education & Skills</SectionSubtitle>
        <SectionDescription>For more than 1 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language.</SectionDescription>

        {/* Skills Section Content */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:w-full md:w-[65%] w-[80%] lg:mx-0 mx-auto mt-20">
          {/* Education Content */}
          <div>
            <h4 className="w-max bg-primary text-[1em] font-normal py-[5px] px-[15px] rounded-[5px] mb-5 text-white mx-auto transition-all duration-300 cursor-default lg:hover:-translate-x-4 hover:-translate-y-4">Educations</h4>
            {educationList.map(({ years, school, competence }, index) => (
              <div
                key={index}
                className="bg-white shadow-cardShadow p-5 mt-4 border-b-[3px] border-primary flex flex-col gap-y-1 rounded-md transition-all duration-300 hover:scale-105"
              >
                <span className="text-[#9d9d9d] font-normal text-[16px]">{years}</span>
                <h4 className="font-medium text-[16px]">{school}</h4>
                <span className="font-normal">{competence}</span>
              </div>
            ))}
          </div>

          {/* Skills Content */}
          <div>
            <h4 className="w-max bg-primary text-[1em] font-normal py-[5px] px-[15px] rounded-[5px] mb-5 text-white mx-auto transition-all duration-300 cursor-default hover:-translate-y-4">Skills</h4>
            {skillsList.map(({ SkillIcon, title, percentage }, index) => (
              <div
                key={index}
                className="bg-white shadow-cardShadow p-5 mb-[10px] rounded-md transition-all duration-300 hover:scale-105 border-b-2 border-primary"
              >
                <div className="flex justify-between items-center mb-3 text-[0.9em]">
                  <div className="flex items-center gap-x-4">
                    <SkillIcon className="text-[1.5rem] text-primary" />
                    <h4 className="font-semibold">{title}</h4>
                  </div>
                  <span className="font-semibold">{percentage}</span>
                </div>
                <div className="relative w-full h-2 bg-[#c5cadf] rounded-md z-0">
                  <div
                    style={{ width: percentage }}
                    className="h-full rounded-md bg-primary z-[5]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Award Content */}
          <div>
            <h4 className="w-max bg-primary text-[1em] font-normal py-[5px] px-[15px] rounded-[5px] mb-5 text-white mx-auto transition-all duration-300 cursor-default lg:hover:translate-x-4 hover:-translate-y-4">Awards</h4>
            {awardList.map(({ years, award, place }, index) => (
              <div
                key={index}
                className="bg-white shadow-cardShadow p-5 mt-4 border-b-[3px] border-primary flex flex-col gap-y-1 rounded-md transition-all duration-300 hover:scale-105"
              >
                <span className="text-[#9d9d9d] font-normal text-[16px]">{years}</span>
                <h4 className="font-medium text-[16px]">{award}</h4>
                <span className="font-normal">{place}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
