"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { identity, linkList, socialMediaList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const { name, division } = identity;

  return (
    <footer className={`${theme === "light" ? "bg-primary" : "bg-altPrimary"} py-16 w-full text-white text-center flex flex-col items-center gap-y-16 transition-all duration-300`}>
      {/* Footer Logo Name */}
      <div className="flex flex-col gap-y-4">
        <h3 className="text-white font-semibold text-[2rem] tracking-wide">{name}</h3>
        <h4 className="text-white font-medium text-[1.4rem]">{division[0]}</h4>
      </div>

      {/* Footer Link List */}
      <div className="flex flex-wrap lg:flex-row flex-col lg:gap-y-0 gap-y-8 gap-x-8">
        {linkList.map(({ title, href }, index) => (
          <Link
            href={`/#${href}`}
            key={index}
            scroll={false}
            className={`${theme === "light" ? "hover:text-light" : "hover:text-altLight"} font-normal transition-all`}
          >
            {title}
          </Link>
        ))}
      </div>

      {/* Footer Social Media List */}
      <div className="flex gap-x-6 ">
        {socialMediaList.map(({ SocialMediaIcon, href }, index) => (
          <Link
            href={href}
            key={index}
            className={`${theme === "light" ? "text-primary" : "text-altPrimary"} p-3 bg-white rounded-xl flex shadow-sm border border-transparent transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white`}
          >
            <SocialMediaIcon />
          </Link>
        ))}
      </div>

      {/* Footer Copyright */}
      <span className="text-white font-normal text-[13px]">© 2022 Created by Muhammad Sufyan. All right reserved</span>
    </footer>
  );
}
