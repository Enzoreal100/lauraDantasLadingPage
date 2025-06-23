import styled from "styled-components";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import ApproachSection from "./components/ApproachSection";

const Skeleton = styled.div`
  width: 100%;
  min-height: 100vh;
  `
function App() {
  return (
    <Skeleton>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <SpecialitiesSection/>
      <ApproachSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <ContactSection/>
    </Skeleton>
    
  )
}

export default App
