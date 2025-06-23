import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';


// Styled Components
export const ApproachSectionContainer = styled.section`
  padding: 60px 20px;
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

const EthicsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
); // Exemplo de ícone de estrela/confiança

const ApproachSection: React.FC = () => {
  return (
    <ApproachSectionContainer id="approach">
      <SectionTitle>Nossa Abordagem Terapêutica: Ciência e Resultado</SectionTitle>
      <SectionSubtitle>
        Acreditamos que um suporte psicológico eficaz combina rigor técnico com uma profunda compreensão humana.
      </SectionSubtitle>

      <ContentWrapper>
        <MainParagraph>
          Minha prática terapêutica é solidamente fundamentada na Terapia Cognitivo-Comportamental (TCC), uma abordagem cientificamente validada e amplamente reconhecida pela sua eficácia. A TCC foca na identificação e reestruturação de padrões de pensamento e comportamento que contribuem para o sofrimento emocional. Através de técnicas comprovadas, você desenvolverá estratégias adaptativas para lidar com desafios, construir resiliência e promover mudanças duradouras.
        </MainParagraph>
        <MainParagraph>
          O processo é colaborativo, visando empoderar o paciente com ferramentas práticas para aplicar no dia a dia. Valorizo uma escuta ativa e empática, criando um ambiente seguro e confidencial onde você possa explorar suas questões com liberdade e confiança. Meu compromisso é com a ética profissional e a promoção do seu bem-estar integral.
        </MainParagraph>

        <HighlightGrid>
          <HighlightItem>
            <TCCTherapyIcon />
            <h4>TCC (Terapia Cognitivo-Comportamental)</h4>
            <p>Abordagem comprovada, focada em ferramentas práticas e resultados mensuráveis para seu desenvolvimento.</p>
          </HighlightItem>
          <HighlightItem>
            <ListeningIcon />
            <h4>Escuta Acolhedora e Ativa</h4>
            <p>Um espaço seguro e empático para você se expressar, sem julgamentos, com total validação.</p>
          </HighlightItem>
          <HighlightItem>
            <ConfidentialityIcon />
            <h4>Total Confidencialidade</h4>
            <p>Todas as informações são tratadas com o mais alto nível de sigilo e ética profissional, conforme o CRP.</p>
          </HighlightItem>
          <HighlightItem>
            <EthicsIcon />
            <h4>Ética Profissional e Respeito</h4>
            <p>Prática baseada nos princípios éticos da psicologia, garantindo um atendimento íntegro e digno.</p>
          </HighlightItem>
        </HighlightGrid>
      </ContentWrapper>
    </ApproachSectionContainer>
  );
};

export default ApproachSection;