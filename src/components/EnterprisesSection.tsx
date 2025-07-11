import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';
import { StyledCTAButton } from './NewsletterSection';


// Styled Components
export const ApproachSectionContainer = styled.section`
  background-color: ${COLOR.BG.PRIMARY};
  text-align: center;
  scroll-margin-top: 80px; /* Para o link do header fixo */

  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: ${COLOR.TEXT.TITLE || '#333'};
  margin-bottom: 20px;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1em;
  color: ${COLOR.TEXT.SUBTITLE};
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px; /* Espaçamento entre blocos de texto/destaques */
  text-align: left; /* Conteúdo interno alinhado à esquerda */
`;

export const MainParagraph = styled.p`
  font-size: 1.1em;
  line-height: 1.8;
  color: ${COLOR.TEXT.SUBTITLE};
  margin-bottom: 20px;
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

export const HighlightItem = styled.div`
  background-color: ${COLOR.BG.SECONDARY || '#FFFFFF'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;

  svg {
    font-size: 2.5em;
    color: ${COLOR.CTABUTTON};
  }

  h4 {
    font-size: 1.2em;
    color: ${COLOR.TEXT.TITLE };
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9em;
    color: ${COLOR.TEXT.TITLE};
  }
`;

const StyledCTAButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const RiskIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
); // Ícone de alerta/risco

const BurnoutPreventionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
); // Ícone de check/progresso dentro de um círculo

const EmotionalIntelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 20.35a2 2 0 001.2-1.39C19.7 17.56 21 15 21 12c0-3.37-2.73-6-6-6-3.37 0-6 2.63-6 6 0 2.22 1 4.3 2.7 5.96"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);
const EnterprisesSection: React.FC = () => {
  return (
    <ApproachSectionContainer id='enterprises'>
      <SectionTitle>Empresas: saúde emocional também é estratégia</SectionTitle>
      <SectionSubtitle>
        Consultorias, palestras e programas personalizados sobre saúde mental no ambiente corporativo.
      </SectionSubtitle>
      <ContentWrapper>
        <HighlightGrid>
          <HighlightItem>
            <RiskIcon />
            <h4>NR1 – Riscos psicossociais</h4>
          </HighlightItem>
          <HighlightItem>
            <BurnoutPreventionIcon />
            <h4>Prevenção de burnout e absenteísmo</h4>
          </HighlightItem>
          <HighlightItem>
            <EmotionalIntelIcon />
            <h4>Promoção da inteligência emocional nas equipes</h4>
          </HighlightItem>
        </HighlightGrid>
      </ContentWrapper>
      <StyledCTAButtonContainer>
        <StyledCTAButton 
          text={"Solicitar proposta"}
          href="LINK_PARA_SUA_PAGINA_DE_CADASTRO_EMAIL_MARKETING_OU_FORMULARIO_GOOGLE" 
        />
      </StyledCTAButtonContainer>
    </ApproachSectionContainer>
  );
};

export default EnterprisesSection;