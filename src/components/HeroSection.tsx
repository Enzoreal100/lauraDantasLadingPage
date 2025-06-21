import styled from 'styled-components';
import CTAButton from './CTAButton';
import CTAForms from './CTAForms';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-image: url('./src/assets/hero.jpg');
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Optional: Add an overlay for better text readability */
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 2.8em;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.1em;
  margin-bottom: 30px;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroTitle>Laura Dantas: Expertise em Psicopatologia, Carreira e Bem-Estar</HeroTitle>
        <HeroSubtitle>Especialista em transtornos psicopatológicos como depressão e transtorno bipolar, atuo também como guia em transição de carreira, promovendo a saúde mental e a adaptação em todas as etapas, do planejamento profissional ao bem-estar na terceira idade.</HeroSubtitle>
        <CTAButton text="Whatsapp" onClick={() => alert('Button clicked!')} />
        <CTAForms text= "Formulário" onClick={() => alert('Forms clicked!')} />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
