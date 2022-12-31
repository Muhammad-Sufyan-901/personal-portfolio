import React from "react";
import { Home, About, Skills, Experience, Services, Portfolio, GetInTouch, Contact } from "../sections";

export default function MainPage() {
  return (
    <React.Fragment>
      <main className="bg-[#fefefe] overflow-x-hidden">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Portfolio />
        <GetInTouch />
        <Contact />
      </main>
    </React.Fragment>
  );
}
