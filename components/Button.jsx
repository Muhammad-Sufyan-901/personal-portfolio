"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ type, size, className = "", children, ...props }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      className={`${
        type === "primary" && theme === "light"
          ? "bg-primary border-transparent text-white hover:bg-transparent hover:border-primary hover:text-primary"
          : type === "outline-primary" && theme === "light"
          ? "bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
          : type === "primary" && theme === "dark"
          ? "bg-altPrimary border-transparent text-white hover:bg-transparent hover:border-altPrimary hover:text-altPrimary"
          : type === "outline-primary" && theme === "dark"
          ? "bg-transparent border-altPrimary text-altPrimary hover:bg-altPrimary hover:text-white"
          : ""
      } ${
        size === "normal" ? "lg:px-12 px-8 py-3 text-[1em]" : size === "large" ? "lg:px-14 px-10 py-4 text-[1.25em]" : size === "small" ? "px-2 py-2 lg:px-4 text-[0.75em]" : ""
      } ${className} font-medium tracking-[1px] inline-block border-[2px] transition-all duration-300`}
      scroll={false}
      {...props}
    >
      {children}
    </Link>
  );
}
