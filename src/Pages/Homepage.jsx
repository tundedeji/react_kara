import React from "react";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Services from "../Components/Services";
import Reasons from "../Components/Reasons";
import CTA from "../Components/CTA";
import Testimonials from "../Components/Testimonials";
import Empty from "../Components/Empty";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Info />
      <Services />
      <Reasons />
      <CTA />
      <Testimonials />
      <Empty />
    </main>
  );
};

export default Homepage;
