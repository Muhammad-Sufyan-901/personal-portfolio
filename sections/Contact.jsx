"use client";

import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { SectionTitle, SectionSubtitle, SectionDescription } from "../components";
import { contactCardList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";
import { SectionWrapper } from "../wrapper";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const { theme } = useContext(ThemeContext);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const clearFormAfterSubmit = () => {
      setNameInput("");
      setEmailInput("");
      setSubjectInput("");
      setMessageInput("");
    };

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then(() => {
        Swal.fire({ icon: "success", title: "Your Message Is Successfully Sended!", timer: 2500 });

        clearFormAfterSubmit();
      })
      .catch(() => Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!", timer: 2500 }));
  };

  return (
    <section
      className="p-sectionPadding pb-28"
      id="contact"
    >
      {/* Contact Section Title */}
      <SectionTitle>Contact Me</SectionTitle>

      {/* Contact Section Container */}
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="xl:max-w-[71.875rem] lg:max-w-[62.5rem] lg:w-full w-[80%] mx-auto grid lg:grid-cols-[30%_60%] grid-cols-1 lg:gap-[10%] gap-16"
      >
        {/* Contact Section Card */}
        <motion.div
          variants={slideIn("left", "tween", 0, 1)}
          className="flex flex-col gap-y-8"
        >
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
              >
                <motion.div
                  variants={fadeIn("up", "tween", index * 0.1, 1)}
                  className={`${
                    theme === "light" ? "bg-white border-primary text-black" : "bg-altSecondary border-altPrimary text-white"
                  } shadow-cardShadow p-5 rounded-md flex flex-col gap-y-3 items-center border-b-[2px] transition-all duration-300 hover:shadow-xl`}
                >
                  <ContactIcon className={`${theme === "light" ? "text-primary" : "text-altPrimary"} text-[22px]`} />
                  <h4 className="font-semibold">{title}</h4>
                  <span className={`${theme === "light" ? "text-light" : "text-altLight"} font-medium lg:text-[14px] text-[12px]`}>{contact}</span>
                  <span className={`${theme === "light" ? "text-primary" : "text-altPrimary"} font-normal text-[14px]`}>Send Me A Message</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact Section Form */}
        <motion.div
          variants={slideIn("right", "tween", 0, 1)}
          className="flex flex-col gap-y-8 h-full"
        >
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
                value={nameInput}
                onChange={({ target: { value } }) => setNameInput(value)}
                className={`${
                  theme === "light" ? "text-black border-primary placeholder:text-primary focus:bg-white" : "text-white border-altPrimary placeholder:text-altPrimary focus:bg-altSecondary"
                } p-6 w-full rounded-lg bg-primary/10 border-[2px] placeholder:font-medium focus:outline-none`}
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                value={emailInput}
                onChange={({ target: { value } }) => setEmailInput(value)}
                className={`${
                  theme === "light" ? "text-black border-primary placeholder:text-primary focus:bg-white" : "text-white border-altPrimary placeholder:text-altPrimary focus:bg-altSecondary"
                } p-6 w-[48%] rounded-lg bg-primary/10 border-[2px] placeholder:font-medium focus:outline-none`}
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                value={subjectInput}
                onChange={({ target: { value } }) => setSubjectInput(value)}
                className={`${
                  theme === "light" ? "text-black border-primary placeholder:text-primary focus:bg-white" : "text-white border-altPrimary placeholder:text-altPrimary focus:bg-altSecondary"
                } p-6 w-[48%] rounded-lg bg-primary/10 border-[2px] placeholder:font-medium focus:outline-none`}
                type="text"
                name="subject"
                placeholder="Your Subject"
              />
            </div>
            <div>
              <textarea
                value={messageInput}
                onChange={({ target: { value } }) => setMessageInput(value)}
                className={`${
                  theme === "light" ? "border-primary text-black placeholder:text-primary focus:bg-white" : "border-altPrimary text-white placeholder:text-altPrimary focus:bg-altSecondary"
                } p-6 w-full h-[16.5rem] resize-none rounded-lg bg-primary/10 border-[2px] placeholder:font-medium focus:outline-none`}
                name="message"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className={`${
                theme === "light" ? "bg-primary hover:border-primary hover:text-primary" : "bg-altPrimary hover:border-altPrimary hover:text-altPrimary"
              } w-fit flex items-center gap-x-3 px-6 py-3 shadow-lg bg-primary rounded-md border-[1.5px] border-transparent text-white font-medium transition-all duration-300 hover:bg-transparent`}
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Contact, "contact");
