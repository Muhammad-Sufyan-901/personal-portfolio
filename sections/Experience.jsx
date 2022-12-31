"use client";

import React from "react";
import { SectionSubtitle, SectionDescription } from "../components";
import { exprienceList } from "../constants/data";

export default function Experience() {
  return (
    <div className="max-w-sectionWidth mx-auto lg:my-0 md:my-10 my-6">
      {/* Experience Section Subtitle & Description */}
      <SectionSubtitle>Work & Experience</SectionSubtitle>
      <SectionDescription>I'm also experienced at some website development and software testing that i learn for 4 month will described below</SectionDescription>

      {/* Experience Section Content */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:w-full w-[80%] lg:mx-0 mx-auto mt-10">
        {exprienceList.map(({ years, work, time, company, description }, index) => (
          <div
            key={index}
            className="p-[35px] shadow-cardShadow rounded-md border-b-[3px] border-primary bg-white transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col leading-[30px] border-b-2 border-light/50 pb-3">
              <h4 className="font-bold text-[1.3em]">{work}</h4>
              <h5 className="font-medium text-[0.9em] italic">{time}</h5>
              <span className="font-normal text-[0.9em] text-light">{years}</span>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
              <h4 className="py-[5px] px-[15px] bg-primary text-white w-max text-[1em] font-normal rounded-[5px]">{company}</h4>
              <p className="font-normal text-[1em]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
