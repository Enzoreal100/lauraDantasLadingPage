import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';

// 1. Interfaces e Dados (Podem vir de um arquivo separado como data/testimonials.ts)
export interface TestimonialData {
  id: number;
  name: string;
  rating: number; // Número de 1 a 5 para as estrelas
  feedback: string;
}

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: 'Ana P.',
    rating: 5,
    feedback: 'O apoio da Dra. Laura foi fundamental para superar um período difícil de depressão. Sua abordagem técnica e acolhedora fez toda a diferença.',
  },
  {
    id: 2,
    name: 'Carlos M.',
    rating: 5,
    feedback: 'Atendimento muito profissional e com resultados concretos. Consegui entender e gerenciar melhor meu transtorno bipolar.',
  },
  {
    id: 3,
    name: 'Beatriz L.',
    rating: 4,
    feedback: 'Excelente orientação para minha transição de carreira. Sinto-me muito mais segura e confiante após as sessões.',
  },
  {
    id: 4,
    name: 'Fernanda D.',
    rating: 5,
    feedback: 'Um espaço de acolhimento e escuta verdadeira. A Dra. Laura me ajudou a ver novas perspectivas e a reconstruir minha saúde mental.',
  },
  {
    id: 5,
    name: 'Ricardo S.',
    rating: 4,
    feedback: 'O treinamento para minha equipe foi muito elogiado. A Dra. Laura trouxe insights valiosos sobre saúde mental no ambiente corporativo.',
  },
  {
    id: 6,
    name: 'Márcia G.',
    rating: 5,
    feedback: 'Encontrei o suporte que precisava para a terceira idade. As sessões me proporcionaram mais leveza e autoconhecimento.',
  },
];


// 2. Styled Components para a Seção e os Cards de Depoimento
export const TestimonialsSectionContainer = styled.section`
  padding: 60px 20px;
  background-color: ${COLOR.BG.SECONDARY || '#f8f8f8'}; /* Use uma cor de fundo adequada */
  text-align: center;

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: ${COLOR.TEXT.TITLE };
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

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 280px é o min-width do card */
  gap: 30px; /* Espaçamento entre os cards */
  justify-items: center; /* Centraliza os itens na grid */
  max-width: 1200px; /* Largura máxima da grid */
  margin: 0 auto; /* Centraliza a grid na página */
`;

export const TestimonialCard = styled.div`
  background-color: ${COLOR.BG.PRIMARY || '#FFFFFF'};
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 220px; /* Garante que os cards tenham uma altura mínima */
  justify-content: space-between; /* Para espaçar o conteúdo verticalmente */
`;

export const TestimonialText = styled.p`
  font-style: italic;
  font-size: 0.95em;
  color: ${COLOR.TEXT.SUBTITLE || '#444'};
  margin-bottom: 15px;
`;

export const ReviewerName = styled.h4`
  font-size: 1.1em;
  color: ${COLOR.TEXT.TITLE || '#333'};
  margin-bottom: 5px;
`;

export const StarRating = styled.div`
  color: #FFD700; /* Cor das estrelas (gold) */
  font-size: 1.2em;
  margin-top: 10px;
`;

// 3. Componente Principal da Seção
const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating); // Estrelas preenchidas e vazias
  };

  return (
    <TestimonialsSectionContainer>
      <SectionTitle>O que os Pacientes Dizem</SectionTitle>
      <SectionSubtitle>
        Confira os depoimentos de quem já experimentou uma jornada de bem-estar e transformação conosco.
      </SectionSubtitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialText>"{testimonial.feedback}"</TestimonialText>
            <div>
              <ReviewerName>{testimonial.name}</ReviewerName>
              <StarRating>{renderStars(testimonial.rating)}</StarRating>
            </div>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSectionContainer>
  );
};

export default TestimonialsSection;