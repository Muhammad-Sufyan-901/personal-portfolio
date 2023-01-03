"use client";

import React from "react";
import { BsDownload } from "react-icons/bs";
import { Button, SectionTitle } from "../components";
import { identity, aboutExperiencesList } from "../constants/data";

export default function About() {
  const { name, division, region, description, picture, CV } = identity;

  return (
    <section
      className="h-full w-screen p-sectionPadding"
      id="about"
    >
      {/* About Section Title */}
      <SectionTitle>About Me</SectionTitle>

      {/* About Content Container */}
      <div className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto grid lg:grid-cols-[35%_50%] lg:gap-[15%] grid-cols-1 gap-4">
        {/* About Image Content */}
        <div className="lg:w-full w-fit lg:mx-0 mx-auto lg:aspect-square rounded-[1rem] bg-primaryGradient grid place-items-center">
          <div className="lg:h-[40rem] md:h-[33rem] h-[22.5rem] overflow-hidden lg:rotate-[10deg] rotate-0 rounded-[1rem] transition-all duration-300 hover:rotate-0">
            <img
              src={picture[1]}
              alt={"About Banner"}
              className="object-cover rounded-[1rem] h-full"
            />
          </div>
        </div>

        {/* About Text Content */}
        <div className="flex flex-col justify-center">
          {/* About Text Description */}
          <div className="lg:border-b-[2px] border-[#777777]/50 mb-8 lg:text-start text-center lg:mt-0 mt-6">
            <h2 className="lg:text-[2rem] text-[1.75rem] font-semibold mb-3">
              Hello i'am <span className="text-primary">{name}</span>
            </h2>
            <h4 className="lg:text-2xl text-xl font-semibold mb-8">
              A <span className="text-primary">{division}</span> based in <span className="text-primary">{region}</span>
            </h4>
            <p className="max-w-[85%] w-full text-base md:text-lg text-[#777777] pb-6 font-normal lg:mx-0 mx-auto">{description[1]}</p>
          </div>

          {/* About Text Experiences */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:place-self-start place-self-center gap-6 mb-10 w-[70%]">
            {aboutExperiencesList.map(({ number, title }, index) => (
              <div
                key={index}
                className="group transition-all duration-200 cursor-pointer"
              >
                <h3 className="text-[2.5em] text-primary font-bold group-hover:-translate-y-2 transition-all duration-200">{number}+</h3>
                <span className="text-[0.9em] text-black font-medium max-w-[10px]">{title}</span>
              </div>
            ))}
          </div>

          {/* About Download CV Button */}
          <Button
            href={CV}
            type="outline-primary"
            size="normal"
            className="w-fit flex items-center rounded-[10px] gap-x-4 font-bold shadow-sm px-8 lg:mx-0 mx-auto"
            download
          >
            Download CV <BsDownload className="text-[20px]" />
          </Button>
        </div>
      </div>
    </section>
  );
}
