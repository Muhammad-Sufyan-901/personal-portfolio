"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { linkList, identity } from "../constants/data";
import { Button, MobileNavbar } from "./index";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const { name } = identity;

  const handleMobileNavOpen = () => setIsMobileNavOpen(true);

  const handleMobileNavClose = () => setIsMobileNavOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", () => (window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)));
  }, []);

  return (
    <header className={`${isScrolled ? "shadow-lg lg:bg-glassmorph bg-white" : "shadow-none bg-transparent"} z-[100] fixed top-0 left-0 w-screen transition-all duration-300 lg:backdrop-blur-[20px]`}>
      {/* Header Container */}
      <div
        className={`${
          isScrolled ? "md:h-[calc(4rem_+_1rem)] h-[calc(3rem_+_1rem)]" : "md:h-[calc(5rem_+_1rem)] h-[calc(4rem_+_1rem)]"
        } xl:container max-w-[62.5rem] w-full mx-auto lg:px-0 px-4 relative flex items-center justify-between py-5 transition-all duration-300`}
      >
        {/* Header Logo */}
        <Link
          href={"/"}
          scroll={false}
          className="font-semibold lg:text-[1.5rem] text-lg text-primary"
        >
          {name}
        </Link>

        {/* Header Link */}
        <div className="items-center gap-12 xl:flex hidden">
          {linkList.map(({ title, href }, index) => (
            <Link
              key={index}
              href={`/#${href}`}
              className={`${activeNav === href ? "border-primary text-primary" : "border-transparent text-secondary"} border-b-2 text-base font-medium hover:text-primary transition`}
              onClick={() => setActiveNav(href)}
              scroll={false}
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Header Contact Button */}
        <Button
          href={"/#contact"}
          type="primary"
          size="normal"
          className="px-10 rounded-[2rem] shadow-sm xl:flex hidden"
        >
          Contact Me
        </Button>

        {/* Header Sidebar Links Open / Close Button */}
        <button
          onClick={handleMobileNavOpen}
          className="xl:hidden flex items-center justify-center p-4 bg-primary text-white rounded-md transition-all duration-300"
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
      </div>
    </header>
  );
}
