"use client";

import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaPaperPlane } from "react-icons/fa";
import { SectionTitle, SectionSubtitle, SectionDescription } from "../components";
import { contactCardList, emailjsConfiguration } from "../constants/data";

export default function Contact() {
  const formRef = useRef(null);

  const { serviceID, templateID, publicKey } = emailjsConfiguration;

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => Swal.fire({ icon: "success", title: "Your Message Is Successfully Sended!", timer: 2500 }))
      .catch(() => Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!", timer: 2500 }));
  };

  return (
    <section
      className="p-sectionPadding"
      id="contact"
    >
      {/* Contact Section Title */}
      <SectionTitle>Contact Me</SectionTitle>

      {/* Contact Section Container */}
      <div className="xl:max-w-[71.875rem] lg:max-w-[62.5rem] lg:w-full w-[80%] mx-auto grid lg:grid-cols-[30%_60%] grid-cols-1 lg:gap-[10%] gap-16">
        {/* Contact Section Card */}
        <div className="flex flex-col gap-y-8">
          {/* Contact Section Card Subtitle & Description */}
          <div className="flex flex-col gap-y-2">
            <SectionSubtitle className="lg:text-[26px]">Let's discuss your project</SectionSubtitle>
            <SectionDescription className="font-medium">Just contact me with this media below</SectionDescription>
          </div>

          {/* Contact Section Card Content */}
          <div className="flex flex-col gap-y-5 lg:w-full w-[80%] lg:mx-0 mx-auto">
            {contactCardList.map(({ ContactIcon, title, contact, href }, index) => (
              <Link
                href={href}
                key={index}
                target="_blank"
                className="bg-white shadow-cardShadow p-5 rounded-md flex flex-col gap-y-3 items-center border-b-[2px] border-primary transition-all duration-300 hover:shadow-xl"
              >
                <ContactIcon className="text-[22px] text-primary" />
                <h4 className="font-semibold">{title}</h4>
                <span className="text-light font-medium lg:text-[14px] text-[12px]">{contact}</span>
                <span className="text-primary font-normal text-[14px]">Send Me A Message</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section Form */}
        <div className="flex flex-col gap-y-8 h-full">
          {/* Contact Section Form Subtitle & Description */}
          <div className="flex flex-col gap-y-2">
            <SectionSubtitle className="lg:text-[26px]">Feel free to contact me</SectionSubtitle>
            <SectionDescription className="font-medium">I'am always open to discussing product design work or partnerships</SectionDescription>
          </div>

          {/* Contact Section Form Input */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5"
          >
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-6 w-full rounded-lg bg-primary/10 border-[2px] border-primary text-black placeholder:text-primary placeholder:font-medium focus:bg-white focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-6 w-[48%] rounded-lg bg-primary/10 border-[2px] border-primary text-black placeholder:text-primary placeholder:font-medium focus:bg-white focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="p-6 w-[48%] rounded-lg bg-primary/10 border-[2px] border-primary text-black placeholder:text-primary placeholder:font-medium focus:bg-white focus:outline-none"
              />
            </div>
            <div className="">
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-6 w-full h-[16.5rem] resize-none rounded-lg bg-primary/10 border-[2px] border-primary text-black placeholder:text-primary placeholder:font-medium focus:bg-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className=" w-fit flex items-center gap-x-3 px-6 py-3 shadow-lg bg-primary rounded-md border-[1.5px] border-transparent text-white font-medium transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
