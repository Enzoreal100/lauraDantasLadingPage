import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';
import CTAForms from './CTAForms';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  text: string;
  
};
// Styled Components
export const NewsletterSectionContainer = styled.section`
  background-color: ${COLOR.BG.SECONDARY};
  text-align: center;
  scroll-margin-top: 80px;
  padding: 100px;

  @media (min-width: 768px) {
    padding: 90px 0 0 0;
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
  margin: 20px;
  padding: 15px 30px;
`;

// Componente Principal da Seção de Newsletter
const NewsletterSection: React.FC<NewsletterSectionProps > = ({ title, subtitle, text }) => {
  return (
    <NewsletterSectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>
        {subtitle}
      </SectionSubtitle>
      <StyledCTAButton 
        text={text}
        href="LINK_PARA_SUA_PAGINA_DE_CADASTRO_EMAIL_MARKETING_OU_FORMULARIO_GOOGLE" 
      />
      
    </NewsletterSectionContainer>
  );
};

export default NewsletterSection;