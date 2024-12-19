import React from "react";
import Hero from "./components/Hero";
import AcmwDesc from "./components/AcmwDesc";
import Initiatives from "./components/Initiatives";
import CompetitionsSlider from "./components/CompetitionsSlider";
import Mentors from "./components/Mentors";
import Team from "./components/Team";
import Flipbook from "./components/Flipbook";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Hero />
      <AcmwDesc />
      <Initiatives />
      <CompetitionsSlider />
      <Mentors />
      <Team />
      <Flipbook />
      <Membership />
      <Testimonials />
      </>
  );
};

export default App;