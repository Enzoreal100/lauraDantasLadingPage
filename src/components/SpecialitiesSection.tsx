import React from 'react';
import styled from 'styled-components';
import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import COLOR from '../constants/colors.constants';

// Define the structure for a speciality
interface Speciality {
  id: number;
  name: string;
  cards: CardData[];
}

// Define the structure for card data
interface CardData {
  id: number;
  title: string;
  description: string;
}

// Styled components
const SectionContainer = styled.section`
  padding: 40px 0;
  background-color: ${COLOR.BG.SECONDARY};
  /* Adicione um scroll-margin-top se esta seção for alvo de links fixos */
  scroll-margin-top: 80px; /* Ajuste para a altura do seu header fixo */
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  color: #333;
`;

// SpecialityContainer é um wrapper para cada Slider
const SpecialityContainer = styled.div`
  margin-bottom: 60px;
  /* IMPORTANTE: Adicione padding horizontal aqui para que o carrossel não encoste nas bordas da tela */
  /* Este padding cria um "espaço de respiro" para o carrossel em si */
  padding: 0 2rem; /* 20px de padding nas laterais para que os cards não colem nas bordas da tela */

  /* Estiliza as bolinhas (dots) do react-slick */
  .slick-dots li button:before {
    font-size: 10px; /* Tamanho das bolinhas */
    color: ${COLOR.TEXT.SUBTITLE || '#999'}; /* Cor das bolinhas */
  }

  .slick-dots li.slick-active button:before {
    color: ${COLOR.BG.PRIMARY || '#128C7E'}; /* Cor da bolinha ativa */
  }
`;

const CardContentWrapper = styled.div`
  background-color: #fff;
  border-radius: 20px; /* Arredondamento dos cantos */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem; /* PADDING INTERNO para o conteúdo do card */
  text-align: center;
  height: 100%; /* Garante que todos os cards tenham a mesma altura dentro do slider */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  transform: translateZ(0); /* Força aceleração de hardware para suavidade */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição para o hover */
  min-height: 250px;

  &:hover {
    transform: translateY(-5px); /* Efeito de elevação */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra mais forte no hover */
  }
`;


const CardTitle = styled.h4`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

// O componente Card agora é um wrapper para o conteúdo
interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    // Adicionamos um div externo com margem para o espaçamento no slider
    // Isso é uma solução comum para react-slick
    <div style={{ padding: '0 10px', margin: '1rem'}}> {/* 10px de padding lateral aqui para criar o gap */}
      <CardContentWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContentWrapper>
    </div>
  );
};


// Example data (replace with your actual data)
const specialities: Speciality[] = [
  {
    id: 1,
    name: 'Psicopatologia', // Mudei o nome para ser mais relevante
    cards: [
      { id: 1,
        title: 'Transtornos do Humor: Depressão e Bipolaridade',
        description: 'Apoio clínico especializado no diagnóstico e tratamento de Transtorno Bipolar e Depressão, visando a estabilização emocional e a melhoria da qualidade de vida.',
      },
      { id: 2,
        title: 'Pós-Psicopatologia: Reintegração e Manutenção',
        description: 'Suporte contínuo após o tratamento de condições psicopatológicas, focando na reintegração social, familiar e profissional, e na prevenção de recaídas.',
      },
      {
        id: 3,
        title: 'Transição de Carreira: Direção e Resiliência',
        description: 'Aconselhamento psicológico para indivíduos em momentos de mudança profissional, desenvolvendo estratégias para lidar com desafios, ansiedade e tomada de decisões.',
      },
      {
        id: 4,
        title: 'Saúde Mental Corporativa: Treinamento NR1',
        description: 'Consultoria e treinamento empresarial com foco na saúde mental no ambiente de trabalho, abordando aspectos da NR1 para promover um ambiente laboral saudável e produtivo.'
      },
      // Adicione mais cards para ver o efeito infinito claramente
      { id: 5,
        title: 'Terapia Individual',
        description: 'Acompanhamento personalizado para diversos desafios emocionais e de desenvolvimento pessoal.'
      },
      { id: 6,
        title: 'Avaliação Psicológica',
        description: 'Diagnóstico e compreensão aprofundada de questões cognitivas e comportamentais.'
      }
    ],
  },
  // Add more specialities as needed
];

// Slider settings for infinite carousel
const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // Para que o padding/margem dos slides seja respeitado,
  // sometimes `centerMode: true` with `centerPadding` helps,
  // but for simple spacing, padding on the slide itself or a wrapper usually works.
  // Add `variableWidth: true` if cards have different widths, but yours are uniform.
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const SpecialitiesSection: React.FC = () => {
  return (
    <SectionContainer id='specialities'>
      <SectionTitle>Especialidades</SectionTitle>
      {specialities.map((speciality) => (
        <SpecialityContainer key={speciality.id}>
          <Slider {...sliderSettings}>
            {speciality.cards.map((card) => (
              <Card key={card.id} title={card.title} description={card.description} />
            ))}
          </Slider>
        </SpecialityContainer>
      ))}
    </SectionContainer>
  );
};

export default SpecialitiesSection;