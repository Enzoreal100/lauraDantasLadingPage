import styled from 'styled-components';
import CTAButton from './CTAButton';
import CTAForms from './CTAForms';
import heroBackground from '../assets/hero.jpg'; 
import heroBackgroundMobile from '../assets/hero-mobile.jpg';

const HeroContainer = styled.section`
  background-color: #a4a5a4ff;
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-image: url(${heroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 80px 20px 20px 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    height: 50vh;
    background-image: url(${heroBackgroundMobile}); 
    background-size: 60vh auto;
    background-position: left bottom;
  }


  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1); /* Optional: Add an overlay for better text readability */
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 1.25rem;
  margin-left: 26rem;
  max-width: 50%;

  @media (max-width: 1024px) {
    padding: 0;
    max-width: 1000px;
    margin: 2rem auto;
  }

`;

const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    font-size: 1.5em; /* Ajuste para telas menores */
`;

const HeroSubtitle = styled.p`
  font-size: 1.1em;
  margin-bottom: 1rem;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroTitle>Você se sente sobrecarregado, ansioso ou perdido?</HeroTitle>
        <HeroSubtitle>A psicoterapia pode ajudar você a compreender seus pensamentos, emoções e comportamentos, oferecendo estratégias práticas e eficazes para recuperar o equilíbrio e o bem-estar.</HeroSubtitle>
        <CTAButton/>
        <CTAForms />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
