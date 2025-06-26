import styled from "styled-components";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import ApproachSection from "./components/ApproachSection";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Skeleton = styled.div`
  width: 100%;
  min-height: 100vh;
  `
function App() {
  return (
    <Skeleton>
      <Header/>
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

      <Fade delay={200} triggerOnce fraction={0.5}> 
        <FAQSection/>
      </Fade>

      <Slide direction="up" triggerOnce fraction={0.5}> 
        <ContactSection/>
      </Slide>
    </Skeleton>
    
  )
}

export default App
