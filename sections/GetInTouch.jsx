"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "../components";

export default function GetInTouch() {
  return (
    <div className="max-w-[1150px] w-full mx-auto relative px-8 pt-24 pb-8">
      {/* Get In Touch Container */}
      <div className="flex justify-center items-center w-full">
        {/* Get In Touch Box */}
        <div className="flex justify-center lg:flex-row flex-col items-center gap-x-[50px] relative w-[90%] bg-white shadow-cardShadow p-[50px] rounded-[10px] border-b-[3px] border-primary">
          {/* Get In Touch Text Content */}
          <div className="uppercase leading-[60px] lg:text-start text-center lg:mb-0 mb-8">
            <h4 className="lg:text-[1.2em] text-[1em] font-light leading-5">Let's Talk</h4>
            <h3 className="lg:text-[2.3em] text-[2em] font-normal">About your</h3>
            <h2 className="lg:text-[4.2em] text-[3em] font-bold bg-gradient-to-t from-transparent to-black bg-clip-text text-transparent opacity-[0.9]">Next Project</h2>
          </div>

          {/* Get In Touch Button */}
          <Button
            href={"/#contact"}
            type="primary"
            size="normal"
            className="flex items-center gap-x-2 rounded-md xl:px-6 lg:px-4 xl:text-[1em] text-[0.8em]"
          >
            Get In Touch <FaPaperPlane />
          </Button>
        </div>
      </div>
    </div>
  );
}
