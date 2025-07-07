import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/about.jpg'; // Import your image here

const AboutSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f8f8f8; /* Example background color */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 80px 40px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 768px) {
    margin-right: 40px;
    margin-bottom: 0;
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333; /* Example text color */
`;

const Description = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555; /* Example text color */
  margin-bottom: 15px;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImage = styled.img`
  width: 75%;
  height: auto;
  border-radius: 8px; /* Example border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Example shadow */
`;

const AboutSection: React.FC = () => {
  return (
    <AboutSectionContainer id='about'>
      <TextContent>
        <Title>Sobre</Title>
        <Description>
          Sou Laura Dantas, psicóloga com atuação baseada na Terapia Cognitivo-Comportamental (TCC), abordagem eficaz e comprovada cientificamente para a transformação de pensamentos, emoções e comportamentos.
        </Description>
        <Description>
          Tenho pós-graduação em Psicopatologia, sou especialista em Transtorno Bipolar e possuo formação em Neurociência, o que amplia minha compreensão sobre os processos mentais e os desafios emocionais que impactam a vida cotidiana.
        </Description>
      </TextContent>
      <ImageContainer>
        <AboutImage src={aboutImage} alt="About Us" /> {/* Replace with your image source */}
      </ImageContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;