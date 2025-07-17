import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/about.jpg';
import aboutVideo from '../assets/video-about.mp4';
import aboutVideoCover from '../assets/video-about-cover.jpg';
import { SectionTitle } from './ScheduleSection';

const AboutSectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;
const AboutSectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;

  @media (min-width: 1024px) {
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

  @media (min-width: 1024px) {
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
  max-width: 600px;
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

const VideoContainer = styled.div`
  display: flex;
  margin: 80px 20px;
  justify-content: center;
  align-items: center;
  height: 600px;
  flex-direction: column;

  @media (max-width: 1024px) {
    height: 45rem;
  }
`;

const AboutSection: React.FC = () => {
  return (
    <AboutSectionContainer id="about">
      <AboutSectionContent>
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
          <AboutImage src={aboutImage} alt="About Us" />
        </ImageContainer>
      </AboutSectionContent>
      <VideoContainer>
        <SectionTitle>
          Conheça mais sobre meu trabalho
        </SectionTitle>
        <Description>
          Conheça mais sobre minha abordagem terapêutica e como posso ajudar você a superar desafios emocionais e alcançar uma vida mais equilibrada.
        </Description>
        <video
          src={aboutVideo}
          controls
          poster={aboutVideoCover}
          style={{ width: 'auto', height: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', zIndex: 1000 }}
        />
      </VideoContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;