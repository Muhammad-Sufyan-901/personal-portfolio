import React from "react";
import { Home, About, Experiences, Works, Services, Portfolio, GetInTouch, Contact } from "../sections";

export default function MainPage() {
  return (
    <React.Fragment>
      <main className="bg-[#fefefe] overflow-x-hidden">
        <Home />
        <About />
        <Experiences />
        <Works />
        <Services />
        <Portfolio />
        <GetInTouch />
        <Contact />
      </main>
    </React.Fragment>
  );
}
