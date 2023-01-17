import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { linkList, socialMediaList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function SectionWrapper(MainSection, activeDots = "") {
  return function () {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="relative w-screen">
            {/* Section Social Media Links */}
            <motion.div
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.25 }}
              whileInView="show"
              initial="hidden"
              className="absolute bottom-6 left-6 flex-col gap-y-3 lg:flex hidden z-10"
            >
              {socialMediaList.map(({ href, SocialMediaIcon }, index) => (
                <Link
                  href={href}
                  key={index}
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <motion.div
                    variants={fadeIn("right", "tween", index * 0.1, 0.85)}
                    className={`${theme === "light" ? "text-primary" : "text-altPrimary"} shadow-lg rounded-full p-3`}
                  >
                    <SocialMediaIcon />
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Main Section */}
            <MainSection />

            {/* Section Dots Navigations */}
            <motion.div
              variants={staggerContainer}
              viewport={{ once: true }}
              whileInView="show"
              initial="hidden"
              className="absolute bottom-[50%] right-6 translate-y-[50%] lg:flex hidden flex-col gap-y-2 z-10"
            >
              {linkList.map(({ href }, index) => (
                <Link
                  href={`/#${href}`}
                  key={index}
                  scroll={false}
                >
                  <motion.div
                    variants={fadeIn("left", "tween", 0.2, 0.5)}
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
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  };
}
