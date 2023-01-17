"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { textVariants } from "../utils/motion";

export default function SectionTitle({ children, ...props }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={textVariants(1)}
      viewport={{ once: true }}
      whileInView="show"
      initial="hidden"
    >
      <React.Fragment>
        <h1
          className={`${theme === "light" ? "to-[#0e2431]" : "to-white"} text-7xl font-extrabold mb-8 bg-gradient-to-t from-transparent bg-clip-text text-transparent opacity-[0.3] text-center z-[-1]`}
          {...props}
        >
          {children}
        </h1>
        <h2
          className={`${theme === "light" ? "text-black" : "text-white"} text-[2.5em] font-bold -translate-y-20 text-center z-[1]`}
          {...props}
        >
          {children}
        </h2>
      </React.Fragment>
    </motion.div>
  );
}
