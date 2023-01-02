"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowDownCircle, BsFillChatFill } from "react-icons/bs";
import { Button } from "../components";
import { identity } from "../constants/data";

export default function Home() {
  const { name, division, description, picture } = identity;

  return (
    <section
      className="w-screen lg:h-screen h-full p-sectionPadding"
      id="home"
    >
      {/* Home Container */}
      <div className="max-w-sectionWidth mx-auto grid lg:grid-cols-2 grid-cols-1 pt-16">
        {/* Home Text Info */}
        <div className="py-16 flex flex-col lg:items-start items-center lg:text-start text-center">
          <span className="font-semibold text-[#777777] text-base">Hello I'am</span>
          <h1 className="font-semibold lg:text-[4rem] md:text-[2.8rem] text-[2.5rem] leading-[120%] text-primary mt-1 mb-4">{name}</h1>
          <h3 className="font-bold text-black text-[22px] mb-6">{division}</h3>
          <p className="font-medium text-[#777777] text-[16px] max-w-[350px] mb-8">{description[0]}</p>
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
        className="inline-flex justify-center items-center gap-x-2 text-black text-center w-full mt-16 font-medium text-[18px] animate-bounce"
      >
        Scroll Down
        <BsArrowDownCircle className="text-primary text-[24px]" />
      </Link>
    </section>
  );
}
