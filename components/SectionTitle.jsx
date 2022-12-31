"use client";

import React from "react";

export default function SectionTitle({ children, ...props }) {
  return (
    <React.Fragment>
      <h1
        className="text-7xl font-extrabold mb-8 bg-gradient-to-t from-transparent to-[#0e2431] bg-clip-text text-transparent opacity-[0.1] text-center"
        {...props}
      >
        {children}
      </h1>
      <h2
        className="text-[2.5em] font-bold -translate-y-20 text-center"
        {...props}
      >
        {children}
      </h2>
    </React.Fragment>
  );
}
