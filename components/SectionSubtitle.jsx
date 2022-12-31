"use client";

import React from "react";

export default function SectionSubtitle({ children, className = "", ...props }) {
  return (
    <h3
      className={`${className} lg:text-[2em] text-[1.6em] lg:text-start text-center font-bold text-primary mb-2`}
      {...props}
    >
      {children}
    </h3>
  );
}
