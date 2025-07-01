// src/pages/HomePage.tsx

import React from 'react';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SpecialitiesSection from "../components/SpecialitiesSection";
import ApproachSection from "../components/ApproachSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import BlogSection from '../components/BlogSection'; // Importe a nova seção

const HomePage: React.FC = () => {
  return (
    <>
      <Fade triggerOnce fraction={0.1} duration={1000}>
        <HeroSection/>
      </Fade>

      <Slide direction="left" triggerOnce fraction={0.5}>
        <AboutSection/>
      </Slide>

      <Fade duration={1500} triggerOnce fraction={0.3}> 
        <SpecialitiesSection/>
      </Fade>

      <Slide direction="right" triggerOnce fraction={0.5}>
        <ApproachSection/>
      </Slide>

      <Zoom triggerOnce fraction={0.5}>
        <TestimonialsSection/>
      </Zoom>

      <Fade triggerOnce fraction={0.3}>
        <BlogSection />
      </Fade>

      <Fade delay={200} triggerOnce fraction={0.5}> 
        <FAQSection/>
      </Fade>

      <Slide direction="up" triggerOnce fraction={0.5}> 
        <ContactSection/>
      </Slide>
    </>
  );
};

export default HomePage;