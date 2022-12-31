"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import { portfolioList } from "../../constants/data";

export default function ModalDetailPage() {
  const { query } = useRouter();
  const { modal } = query;
  const { title, subtitle, img, description } = portfolioList[modal] || {};

  return (
    <React.Fragment>
      <div className="z-[100] fixed flex justify-center items-center w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-[20px] transition-all duration-300">
        <div className={`relative bg-white shadow-xl max-w-[800px] m-5 p-10 rounded-[10px] transition-all duration-300`}>
          <Link
            href="/"
            className="absolute top-0 right-0 m-5 rounded-full border border-light"
          >
            <IoMdArrowBack className="text-[20px] text-light" />
          </Link>
          <h3 className="text-[1.5em] font-bold mb-2">{title}</h3>
          <h4 className="text-[1.2em] font-semibold text-light">{subtitle}</h4>
          <img
            src={img}
            alt="Modal Banner"
            className="w-full my-5 rounded-[10px]"
          />
          <p className="text-[1em] font-normal">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
