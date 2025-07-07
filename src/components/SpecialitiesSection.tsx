import React from 'react';
import styled from 'styled-components';
import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import COLOR from '../constants/colors.constants';

// Define the structure for a speciality
interface Speciality {
  id: number;
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
    cards: [
      { id: 1,
        title: 'Depressão',
        description: 'Apoio especializado para o tratamento da depressão, buscando a recuperação do bem-estar e da qualidade de vida.',
      },
      { id: 2,
        title: 'Transtornos de Ansiedade',
        description: 'Tratamento para diversas formas de ansiedade, desenvolvendo estratégias para lidar com preocupações, medos e ataques de pânico.',
      },
      {
        id: 3,
        title: 'Transtorno Bipolar',
        description: 'Acompanhamento contínuo para o manejo das oscilações de humor, promovendo estabilidade e autoconhecimento.',
      },
      {
        id: 4,
        title: 'Transtorno do Jogo (Ludopatia)',
        description: 'Intervenção focada no vício em jogos, auxiliando na retomada do controle e na reconstrução de uma vida equilibrada.'
      },
      // Adicione mais cards para ver o efeito infinito claramente
      { id: 5,
        title: 'Saúde Mental no Ambiente Corporativo',
        description: 'Com MBA em Educação Corporativa pela FIA/USP, ofereço soluções para promover um ambiente de trabalho mais saudável e produtivo.'
      },
      { id: 6,
        title: 'Palestras Temáticas',
        description: 'Leve para sua empresa discussões relevantes sobre saúde mental, bem-estar, gestão do estresse e muito mais.'
      },
      {
        id: 7,
        title: 'Consultorias Personalizadas',
        description: 'Análise e desenvolvimento de estratégias customizadas para aprimorar a saúde mental e o clima organizacional da sua equipe.'
      },
      {
        id: 8,
        title: 'Treinamentos Especializados',
        description: 'Capacitação com foco na prevenção de riscos psicossociais e atendimento à NR1, fortalecendo a segurança e o bem-estar dos colaboradores.'
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