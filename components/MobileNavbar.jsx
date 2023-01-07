"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { linkList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";

export default function MobileNavbar({ handleMobileNavClose, isMobileNavOpen }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed z-[100] top-0 left-0 w-full h-screen bg-glassmorph backdrop-blur-[20px] transition-all duration-300 flex justify-center items-center">
      {/* Mobile Nav Container */}
      <div
        className={`${isMobileNavOpen ? "animate-fromTopAnimation" : "animate-toTopAnimation"} ${
          theme === "light" ? "bg-white" : "bg-altSecondary"
        } relative w-[80%] mx-auto rounded-lg shadow-lg max-w-[600px] h-[575px] p-10 flex flex-col gap-y-10 justify-center items-center m-5 transition-all duration-300`}
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
              className={`${theme === "light" ? "text-secondary hover:text-primary" : "text-white hover:text-altPrimary"} md:text-xl text-base font-medium transition duration-300`}
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <div className="w-full flex items-center justify-center">
          <button
            onClick={toggleTheme}
            className={`${theme === "light" ? "text-black" : "text-white"} bg-glassmorph p-5 flex items-center justify-center rounded-full shadow-lg outline-none`}
          >
            {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
          </button>
        </div>
      </div>
    </div>
  );
}
