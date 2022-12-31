"use client";

import Link from "next/link";
import React from "react";
import { identity, linkList, socialMediaList } from "../constants/data";

export default function Footer() {
  const { name, division } = identity;

  return (
    <footer className="mt-28 py-16 w-full bg-primary text-white text-center flex flex-col items-center gap-y-16">
      {/* Footer Logo Name */}
      <div className="flex flex-col gap-y-4">
        <h3 className="text-white font-semibold text-[2rem] tracking-wide">{name}</h3>
        <h4 className="text-white font-medium text-[1.4rem]">{division}</h4>
      </div>

      {/* Footer Link List */}
      <div className="flex flex-wrap lg:flex-row flex-col lg:gap-y-0 gap-y-8 gap-x-8">
        {linkList.map(({ title, href }, index) => (
          <Link
            href={`/#${href}`}
            key={index}
            scroll={false}
            className="font-normal transition-all hover:text-light"
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
            className="p-3 bg-white rounded-xl flex shadow-sm border border-transparent text-primary transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white"
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
