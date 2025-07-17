import styled from "styled-components";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import ScheduleSection from "./components/ScheduleSection";
import { Fade, Slide } from "react-awesome-reveal";
import EnterprisesSection from "./components/EnterprisesSection";
import NewsletterSection from "./components/NewsletterSection";

const Skeleton = styled.div`
  width: 100%;
  min-height: 100vh;
  `
function App() {
  return (
    <Skeleton>
      <Header/>
      <Fade triggerOnce duration={1000}>
        <HeroSection/>
      </Fade>

      <Slide direction="left" triggerOnce>
        <AboutSection/>
      </Slide>

      <Fade duration={1500} triggerOnce> 
        <SpecialitiesSection/>
      </Fade>

      <Slide direction="right" triggerOnce>
        <ScheduleSection/>
      </Slide>

      <Slide direction="up" triggerOnce>
        <NewsletterSection 
          title='Conteúdos gratuitos e atualizações'
          text='Receber conteúdos'
          subtitle='Quer receber conteúdos exclusivos sobre saúde mental, dicas práticas de bem-estar e novidades sobre minha atuação diretamente no seu e-mail?'  
        />
      </Slide>

      <Slide direction="up" triggerOnce>
        <EnterprisesSection/>
      </Slide>

      {/* <Zoom triggerOnce fraction={0.5}>
        <TestimonialsSection/>
      </Zoom> */}

      <Fade delay={200} triggerOnce> 
        <FAQSection/>
      </Fade>

      <Slide direction="up" triggerOnce> 
        <ContactSection/>
      </Slide>
    </Skeleton>
    
  )
}

export default App
