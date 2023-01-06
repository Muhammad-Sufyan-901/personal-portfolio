"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

export default function Modal({ isOpen, closeModal, title, subtitle, img, description, ...props }) {
  const { theme } = useContext(ThemeContext);

  if (isOpen) {
    return (
      <div
        onClick={closeModal}
        className="z-[100] fixed flex justify-center items-center w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-[20px] transition-all duration-300"
        {...props}
      >
        <div
          className={`${isOpen ? "animate-fromTopAnimation" : "animate-toTopAnimation"} ${
            theme === "light" ? "bg-white text-black" : "bg-altSecondary text-white"
          } relative shadow-xl max-w-[600px] m-5 p-10 rounded-[10px] transition-all duration-300`}
        >
          <MdClose
            onClick={closeModal}
            className="absolute top-0 right-0 m-5 cursor-pointer rounded-full border border-light text-[20px] text-red-500"
          />
          <h3 className="text-[1.5em] font-bold mb-2">{title}</h3>
          <h4 className={`${theme === "light" ? "text-light" : "text-altLight"} text-[1.2em] font-semibold`}>{subtitle}</h4>
          <Image
            src={img}
            height={350}
            width={550}
            alt="Modal Banner"
            className="w-full my-5 rounded-[10px]"
          />
          <p className="text-[1em] font-normal">{description}</p>
        </div>
      </div>
    );
  }
}
