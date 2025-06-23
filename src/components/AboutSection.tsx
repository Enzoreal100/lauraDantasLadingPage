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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Description>
      </TextContent>
      <ImageContainer>
        <AboutImage src={aboutImage} alt="About Us" /> {/* Replace with your image source */}
      </ImageContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;