import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';
import CTAForms from './CTAForms';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  text: string;
  
};

export const NewsletterSectionContainer = styled.section`
  background-color: ${COLOR.BG.SECONDARY};
  text-align: center;
  scroll-margin-top: 80px;
  padding: 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 80px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: ${COLOR.TEXT.TITLE || '#333'};
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2em; /* Um pouco maior para ser mais convidativo */
  color: ${COLOR.TEXT.SUBTITLE || '#555'};
  margin-bottom: 40px; /* Mais espaço para o botão */
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledCTAButton = styled(CTAForms)`
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 800px;
`;

// Componente Principal da Seção de Newsletter
const NewsletterSection: React.FC<NewsletterSectionProps > = ({ title, subtitle }) => {
  return (
    <NewsletterSectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>
        {subtitle}
      </SectionSubtitle>
      <StyledCTAButton />
      
    </NewsletterSectionContainer>
  );
};

export default NewsletterSection;