import React, { useState } from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';


// 1. Interfaces e Dados (Para simplicidade, definidos aqui. Podem vir de um arquivo separado)
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Como funciona o processo terapêutico?",
    answer: "O processo terapêutico inicia-se com uma sessão de acolhimento e avaliação, onde compreendemos suas necessidades e objetivos. A partir daí, estabelecemos um plano de tratamento personalizado, com sessões regulares focadas no seu desenvolvimento e bem-estar."
  },
  {
    id: 2,
    question: "Quais são as formas de atendimento disponíveis?",
    answer: "Ofereço atendimento presencial em meu consultório no Méier, Rio de Janeiro, e atendimento online para pacientes em todo o Brasil. Ambas as modalidades garantem a mesma qualidade e confidencialidade."
  },
  {
    id: 3,
    question: "O atendimento é confidencial?",
    answer: "Sim, a confidencialidade é um pilar fundamental da prática psicológica. Todas as informações compartilhadas durante as sessões são protegidas pelo Código de Ética Profissional do Psicólogo (CRP), garantindo total sigilo e privacidade."
  },
  {
    id: 4,
    question: "Quais são os valores das consultas?",
    answer: "Para informações sobre valores e formas de pagamento, por favor, entre em contato diretamente pelo WhatsApp ou preencha o formulário de contato. Teremos prazer em fornecer os detalhes."
  },
  {
    id: 5,
    question: "Você atende convênios médicos?",
    answer: "No momento, meu atendimento é particular. No entanto, forneço recibos para que você possa solicitar reembolso junto ao seu convênio, caso ele ofereça essa opção para serviços psicológicos."
  },
  {
    id: 6,
    question: "Qual a duração média de uma sessão?",
    answer: "As sessões de psicoterapia têm duração média de 50 minutos, mas este tempo pode ser ajustado conforme a necessidade e o tipo de atendimento."
  }
];

// 2. Styled Components para a Seção e o Acordeão
export const FAQSectionContainer = styled.section`
  padding: 60px 20px;
  background-color: ${COLOR.BG.PRIMARY || '#f0f2f5'};
  text-align: center;
  scroll-margin-top: 80px; /* Importante para o scroll do link do header fixo */

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: ${COLOR.TEXT.TITLE};
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

export const AccordionWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espaçamento entre os itens do acordeão */
`;

export const AccordionItemContainer = styled.div`
  background-color: ${COLOR.BG.PRIMARY};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  overflow: hidden; /* Garante que a transição de altura funcione bem */
`;

export const QuestionButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${COLOR.BG.PRIMARY};
  border: none;
  border-bottom: ${({ isOpen }) => (isOpen ? `1px solid ${COLOR.BORDER_COLOR || '#eee'}` : 'none')};
  color: ${COLOR.TEXT.TITLE || '#333'};
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${COLOR.BG.HOVER};
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const AnswerContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? '0 20px 20px 20px' : '0 20px')};
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; /* Altura máxima para animação */
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  color: ${COLOR.TEXT.SUBTITLE};
  text-align: left;
  line-height: 1.6;
`;

// Componente Individual do Acordeão
interface FAQItemAccordionProps {
  question: string;
  answer: string;
}

const FAQItemAccordion: React.FC<FAQItemAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItemContainer>
      <QuestionButton onClick={toggleAccordion} isOpen={isOpen}>
        {question}
        {/* Ícone de seta simples */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </QuestionButton>
      <AnswerContent isOpen={isOpen}>
        <p>{answer}</p>
      </AnswerContent>
    </AccordionItemContainer>
  );
};


// 3. Componente Principal da Seção FAQ
const FAQSection: React.FC = () => {
  return (
    <FAQSectionContainer id="FAQ"> {/* Adicione o ID para o link do header */}
      <SectionTitle>Dúvidas Frequentes</SectionTitle>
      <SectionSubtitle>
        Encontre respostas para as perguntas mais comuns sobre o processo terapêutico, formas de atendimento e outros tópicos importantes.
      </SectionSubtitle>
      <AccordionWrapper>
        {faqs.map((item) => (
          <FAQItemAccordion
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </AccordionWrapper>
    </FAQSectionContainer>
  );
};

export default FAQSection;