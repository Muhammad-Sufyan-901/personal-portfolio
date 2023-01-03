"use client";

import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { linkList } from "../constants/data";
import { Button } from "./index";

export default function MobileNavbar({ handleMobileNavClose, isMobileNavOpen }) {
  return (
    <div className="fixed z-[100] top-0 left-0 w-full h-screen bg-glassmorph backdrop-blur-[20px] transition-all duration-300 flex justify-center items-center">
      {/* Mobile Nav Container */}
      <div
        className={`${
          isMobileNavOpen ? "animate-fromTopAnimation" : "animate-toTopAnimation"
        } relative w-[80%] mx-auto rounded-lg bg-white shadow-lg max-w-[600px] h-[500px] p-10 flex flex-col gap-y-10 justify-center items-center m-5 transition-all duration-300`}
      >
        {/* Mobile Nav Close Buttons */}
        <IoClose
          onClick={handleMobileNavClose}
          className="absolute top-0 right-0 m-5 cursor-pointer rounded-full border border-light text-[24px] text-red-500"
        />

        {/* Mobile Nav Links */}
        <div className="flex flex-col justify-center items-center gap-y-6">
          {linkList.map(({ title, href }, index) => (
            <Link
              href={`/#${href}`}
              key={index}
              onClick={handleMobileNavClose}
              scroll={false}
              className="text-secondary md:text-xl text-base font-medium hover:text-primary transition duration-300"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Contact Button */}
        <Link
          href={"/#contact"}
          onClick={handleMobileNavClose}
          scroll={false}
          className="bg-primary border-transparent text-white hover:bg-transparent hover:border-primary hover:text-primary lg:px-12 px-8 py-3 text-[1em] rounded-[2em] shadow-sm md:text-xl font-medium tracking-[1px] inline-block border-[2px] transition-all duration-300"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
