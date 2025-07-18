import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';
import CTAForms from './CTAForms';
import newsletterImage from '../assets/newsletter.jpg';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  text: string;
  
};

export const NewsletterSectionContainer = styled.section`
  display: flex;
  background-color: ${COLOR.BG.SECONDARY};
  text-align: center;
  scroll-margin-top: 80px;
  padding: 40px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12rem;

  @media (max-width: 1024px) {
    padding: 40px 20px;
    margin-top: 80px;
    flex-direction: column;
    gap: 2rem;
  }
`;

const NewsletterSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px; 
  
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: ${COLOR.TEXT.TITLE || '#333'};
  margin-bottom: 20px;
  max-width: 800px;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2em; /* Um pouco maior para ser mais convidativo */
  color: ${COLOR.TEXT.SUBTITLE || '#555'};
  margin-bottom: 40px; /* Mais espaço para o botão */
  max-width: 700px;
`;

export const StyledCTAButton = styled(CTAForms)`
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 800px;
`;

const ImageContainer = styled.div`
  max-width: 600px;
`;

const NewsletterImage = styled.img`
  width: auto;
  max-height: 400px; 
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Componente Principal da Seção de Newsletter
const NewsletterSection: React.FC<NewsletterSectionProps > = ({ title, subtitle }) => {
  return (
      <NewsletterSectionContainer>
        <ImageContainer>
          <NewsletterImage src={newsletterImage} alt="Newsletter" />
        </ImageContainer>
        <NewsletterSectionContent>
          <SectionTitle>{title}</SectionTitle>
          <SectionSubtitle>
            {subtitle}
          </SectionSubtitle>
          <StyledCTAButton />
        </NewsletterSectionContent>
      </NewsletterSectionContainer>
  );
};

export default NewsletterSection;