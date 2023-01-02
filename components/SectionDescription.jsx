"use client";

import React from "react";

export default function SectionDescription({ children, className = "", ...props }) {
  return (
    <p
      className={`${className} font-normal lg:max-w-[750px] md:max-w-[650px] md:mx-auto lg:mx-0 md:text-[1em] text-[0.9em] lg:text-start text-center`}
      {...props}
    >
      {children}
    </p>
  );
}
