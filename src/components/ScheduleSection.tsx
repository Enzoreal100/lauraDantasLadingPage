import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';
import CTAButton from './CTAButton';
import CTAForms from './CTAForms';


// Styled Components
export const ApproachSectionContainer = styled.section`
  background-color: ${COLOR.BG.PRIMARY};
  text-align: center;
  scroll-margin-top: 80px; /* Para o link do header fixo */
  margin: 80px 20px;

  @media (max-width: 1024px) {
    padding: 0 20px;
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

const CTAbuttonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;`
;


// Ícones (você pode substituir por ícones de uma biblioteca como react-icons)
const TCCTherapyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
    <path d="M12 8v4l3 3"></path>
  </svg>
); // Exemplo de ícone de relógio ou conhecimento

const ListeningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 17h6m-3 3v-6m0 6a3 3 0 110-6 3 3 0 010 6zM4 14a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v7z"></path>
  </svg>
); // Exemplo de ícone de microfone ou escuta

const ConfidentialityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
); // Exemplo de ícone de cadeado

const ScheduleSection: React.FC = () => {
  return (
    <ApproachSectionContainer id="schedule">
      <SectionTitle>Agende sua primeira conversa</SectionTitle>
      <SectionSubtitle>
        Atendimento com escuta humanizada, técnica e objetiva. Vamos conversar?
      </SectionSubtitle>

      <ContentWrapper>
        <HighlightGrid>
          <HighlightItem>
            <TCCTherapyIcon />
            <h4>Atendimentos Online para todo o Brasil </h4>
          </HighlightItem>
          <HighlightItem>
            <ListeningIcon />
            <h4>Horários flexíveis</h4>
          </HighlightItem>
          <HighlightItem>
            <ConfidentialityIcon />
            <h4>Primeiro contato sem compromisso</h4>
          </HighlightItem>
        </HighlightGrid>
      </ContentWrapper>
      <CTAbuttonContainer>
        <CTAButton />
        <CTAForms />
      </CTAbuttonContainer>
    </ApproachSectionContainer>
  );
};

export default ScheduleSection;