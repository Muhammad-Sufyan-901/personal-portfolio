"use client";

import React, { useContext } from "react";
import { BiCheck } from "react-icons/bi";
import { SectionTitle, SectionSubtitle, SectionDescription } from "../components";
import { servicesList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";

export default function Services() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="p-sectionPadding"
      id="services"
    >
      {/* Services Section Title */}
      <SectionTitle>Services</SectionTitle>

      {/* Services Section Container */}
      <div className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto">
        {/* Services Section Subtitle & Description */}
        <SectionSubtitle>What I'm Provide?</SectionSubtitle>
        <SectionDescription>I'm providing services about Website development, Software testing and Content writer that i'm gonna described below</SectionDescription>

        {/* Services Section Content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-full w-[80%] lg:mx-0 mx-auto gap-12 mt-16">
          {servicesList.map(({ title, ServicesIcon, description, services }, index) => (
            <div
              key={index}
              className={`${
                theme === "light" ? "bg-white text-black hover:border-primary" : "bg-altSecondary text-white hover:border-altPrimary"
              } w-full xl:h-fit h-auto rounded-b-[2rem] border-[1.5px] border-transparent transition-all duration-300 cursor-pointer shadow-cardShadow hover:shadow-2xl`}
            >
              <div className={`${theme === "light" ? "bg-primary" : "bg-altPrimary"} p-8 text-white rounded-b-[2rem]`}>
                <h3 className="lg:text-xl text-lg text-center font-semibold flex items-center gap-x-3 justify-center">
                  <ServicesIcon /> {title}
                </h3>
              </div>
              <div className="p-8 flex flex-col gap-y-4">
                <h4 className={`${theme === "light" ? "text-primary" : "text-altPrimary"} font-semibold text-[1.2em]`}>What is {title}?</h4>
                <p className="font-normal">{description}</p>
                <h4 className={`${theme === "light" ? "text-primary" : "text-altPrimary"} font-semibold text-[1.2em]`}>What i'm provide</h4>
                <ul className="flex flex-col gap-y-2">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-1 text-[0.9em] font-medium"
                    >
                      <BiCheck className="text-primary text-[18px]" /> {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
