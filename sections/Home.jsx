"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { BsArrowDownCircle, BsFillChatFill } from "react-icons/bs";
import { Button } from "../components";
import { identity } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const { name, division, description, picture } = identity;

  return (
    <section
      className="w-screen 2xl:h-screen h-full p-sectionPadding"
      id="home"
    >
      {/* Home Container */}
      <div className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto grid lg:grid-cols-2 grid-cols-1 pt-16">
        {/* Home Text Info */}
        <div className="py-16 flex flex-col lg:items-start items-center lg:text-start text-center">
          <span className={`${theme === "light" ? "text-[#777777]" : "text-[#a9afc3]"} font-semibold text-base`}>Hello I'am</span>
          <h1 className={`${theme === "light" ? "text-primary" : "text-altPrimary"} font-semibold lg:text-[4rem] md:text-[2.8rem] text-[2.5rem] leading-[120%] mt-1 mb-4`}>{name}</h1>
          <h3 className={`${theme === "light" ? "text-black" : "text-white"} font-bold text-[22px] mb-6`}>{division}</h3>
          <p className={`${theme === "light" ? "text-[#777777]" : "text-[#a9afc3]"} font-medium text-[16px] max-w-[350px] mb-8`}>{description[0]}</p>
          <Button
            href={"/#contact"}
            type="primary"
            size="normal"
            className="w-fit rounded-[10px] flex items-center gap-x-3"
          >
            Let's Talk
            <BsFillChatFill className="text-[20px]" />
          </Button>
        </div>

        {/* Home Image */}
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={picture[0]}
            alt={"Personal Profile"}
            width={550}
            height={550}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Home Scroll Down Button */}
      <Link
        href={"/#about"}
        scroll={false}
        className={`${theme === "light" ? "text-black" : "text-white"} inline-flex justify-center items-center gap-x-2 text-center w-full mt-16 font-medium text-[18px] animate-bounce`}
      >
        Scroll Down
        <BsArrowDownCircle className={`${theme === "light" ? "text-primary" : "text-altPrimary"} text-[24px]`} />
      </Link>
    </section>
  );
}
