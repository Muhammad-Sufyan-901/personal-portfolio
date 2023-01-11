import Link from "next/link";
import React from "react";
import { linkList, socialMediaList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";

export default function SectionWrapper(Section, activeDots = "") {
  return function () {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="relative w-screen">
            <Section />

            {/* Section Social Media Links */}
            <div className="absolute bottom-6 left-6 flex-col gap-y-3 lg:flex hidden z-10">
              {socialMediaList.map(({ href, SocialMediaIcon }, index) => (
                <Link
                  href={href}
                  key={index}
                  className={`${theme === "light" ? "text-primary" : "text-altPrimary"} shadow-lg rounded-full p-3 transition-all duration-300 hover:-translate-y-1`}
                >
                  <SocialMediaIcon />
                </Link>
              ))}
            </div>

            {/* Section Dots Navigations */}
            <div className="absolute bottom-[50%] right-6 translate-y-[50%] lg:flex hidden flex-col gap-y-2 z-10">
              {linkList.map(({ href }, index) => (
                <Link
                  href={`/#${href}`}
                  key={index}
                  className={`
                    ${
                      theme === "light" && href === activeDots
                        ? "bg-primary"
                        : theme === "dark" && href === activeDots
                        ? "bg-altPrimary"
                        : theme === "light" && href !== activeDots
                        ? "bg-light"
                        : theme === "dark" && href !== activeDots
                        ? "bg-altLight"
                        : ""
                    } 
                    h-2 w-2 rounded-full
                  `}
                  scroll={false}
                />
              ))}
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  };
}
