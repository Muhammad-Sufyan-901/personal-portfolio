"use client";

import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { linkList, identity } from "../constants/data";
import { MobileNavbar } from "./index";
import { ThemeContext } from "../context/ThemeContext";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { name } = identity;

  const handleMobileNavOpen = () => setIsMobileNavOpen(true);

  const handleMobileNavClose = () => setIsMobileNavOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", () => (window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)));
  }, []);

  return (
    <motion.header
      variants={staggerContainer}
      className={`${
        isScrolled && theme === "light" ? "shadow-lg lg:bg-glassmorph bg-white" : isScrolled && theme === "dark" ? "shadow-lg lg:bg-glassmorph bg-[#0e1b31]" : "shadow-none bg-transparent"
      } z-[100] fixed top-0 left-0 w-screen transition-all duration-300 lg:backdrop-blur-[20px]`}
      whileInView="show"
      initial="hidden"
    >
      {/* Header Container */}
      <motion.div
        variants={fadeIn("down", "tween", 0.3, 0.75)}
        className={`${
          isScrolled ? "md:h-[calc(4rem_+_1rem)] h-[calc(3rem_+_1rem)]" : "md:h-[calc(5rem_+_1rem)] h-[calc(4rem_+_1rem)]"
        } xl:container max-w-[62.5rem] w-full mx-auto lg:px-0 px-4 relative flex items-center justify-between py-5 transition-all duration-300`}
      >
        {/* Header Logo */}
        <Link
          href={"/"}
          scroll={false}
          className={`${theme === "light" ? "text-primary" : "text-altPrimary"} font-semibold lg:text-[1.5rem] text-lg`}
        >
          {name}
        </Link>

        {/* Header Link */}
        <div className="items-center gap-12 xl:flex hidden">
          {linkList.map(({ title, href }, index) => (
            <Link
              key={index}
              href={`/#${href}`}
              className={`${
                theme === "light" && activeNav !== href
                  ? "text-secondary border-transparent"
                  : theme === "light" && activeNav === href
                  ? "text-primary border-primary"
                  : theme === "dark" && activeNav !== href
                  ? "text-white border-transparent"
                  : theme === "dark" && activeNav === href
                  ? "text-altPrimary border-altPrimary"
                  : ""
              } border-b-2 text-base font-medium hover:text-primary transition`}
              onClick={() => setActiveNav(href)}
              scroll={false}
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <div className="xl:flex hidden items-center justify-center">
          <button
            onClick={toggleTheme}
            className={`${theme === "light" ? "text-black" : "text-white"} bg-glassmorph p-5 flex items-center justify-center rounded-full shadow-lg outline-none`}
          >
            {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
          </button>
        </div>

        {/* Header Sidebar Links Open / Close Button */}
        <button
          onClick={handleMobileNavOpen}
          className={`${theme === "light" ? "bg-primary" : "bg-altPrimary"} xl:hidden flex items-center justify-center p-4 text-white rounded-md transition-all duration-300`}
        >
          {isMobileNavOpen ? <IoClose /> : <HiMenu />}
        </button>

        {/* Header Sidebar */}
        {isMobileNavOpen && (
          <MobileNavbar
            handleMobileNavClose={handleMobileNavClose}
            isMobileNavOpen={isMobileNavOpen}
          />
        )}
      </motion.div>
    </motion.header>
  );
}
