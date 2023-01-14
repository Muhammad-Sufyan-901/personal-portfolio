"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { textVariants } from "../utils/motion";

export default function SectionDescription({ children, className = "", ...props }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.p
      variants={textVariants(1.2)}
      className={`${theme === "light" ? "text-black" : "text-white/80"} ${className} font-normal lg:max-w-[750px] md:max-w-[650px] md:mx-auto lg:mx-0 md:text-[1em] text-[0.9em] lg:text-start text-center`}
      {...props}
    >
      {children}
    </motion.p>
  );
}
