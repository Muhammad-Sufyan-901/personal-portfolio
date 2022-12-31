"use client";

import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { linkList } from "../constants/data";
import { Button } from "./index";

export default function MobileNavbar({ handleSidebarClose, isSidebarOpen }) {
  return (
    <div className="fixed z-[100] top-0 left-0 w-full h-screen bg-glassmorph backdrop-blur-[20px] transition-all duration-300 flex justify-center items-center">
      {/* Sidebar Container */}
      <div
        className={`${
          isSidebarOpen ? "animate-toTopAnimation" : "animate-fromTopAnimation"
        } relative w-[80%] mx-auto rounded-lg bg-white shadow-lg max-w-[600px] h-[500px] p-10 flex flex-col gap-y-10 justify-center items-center m-5 transition-all duration-300`}
      >
        {/* Sidebar Close Buttons */}
        <IoClose
          onClick={handleSidebarClose}
          className="absolute top-0 right-0 m-5 cursor-pointer rounded-full border border-light text-[24px] text-red-500"
        />

        {/* Sidebar Links */}
        <div className="flex flex-col justify-center items-center gap-y-6">
          {linkList.map(({ title, href }, index) => (
            <Link
              href={`/#${href}`}
              key={index}
              onClick={handleSidebarClose}
              scroll={false}
              className="text-secondary md:text-xl text-base font-medium hover:text-primary transition duration-300"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Sidebar Contact Button */}
        <Button
          href={"/#contact"}
          type="primary"
          size="normal"
          className="rounded-[2rem] shadow-sm md:text-xl"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}
