"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SectionSubtitle({ children, className = "", ...props }) {
  const { theme } = useContext(ThemeContext);

  return (
    <h3
      className={`${theme === "light" ? "text-primary" : "text-altPrimary"} ${className} lg:text-[2em] text-[1.6em] lg:text-start text-center font-bold mb-2`}
      {...props}
    >
      {children}
    </h3>
  );
}
