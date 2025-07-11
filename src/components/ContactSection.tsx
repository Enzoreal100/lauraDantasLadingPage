import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';

// Styled Components
export const ContactSectionContainer = styled.section`
  padding: 60px 20px;
  background-color: ${COLOR.BG.PRIMARY || '#f8f8f8'};
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

export const SectionSubtitle = styled.h3`
  font-size: 1.1em;
  color: ${COLOR.TEXT.SUBTITLE || '#555'};
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Empilha botões no mobile */
  gap: 20px;
  margin-top: 30px;
  width: 100%;
  max-width: 350px; /* Limita a largura dos botões */
  margin-left: auto; /* Centraliza a wrapper de botões */
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: row; /* Coloca lado a lado no desktop */
    justify-content: center;
    max-width: 500px; /* Aumenta a largura máxima para dois botões lado a lado */
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  color: ${COLOR.TEXT.TITLE};
  background-color: ${COLOR.BG.SECONDARY};
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.2s ease, background-color 0.3s ease;
  text-align: center;
  min-width: 200px; /* Garante uma largura mínima para os botões */

  &:hover {
    transform: translateY(-2px); /* Efeito de elevação no hover */
  }
`;

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

// Componente Principal da Seção de Contato
const ContactSection: React.FC = () => {
  return (
    <ContactSectionContainer id="contact">
      <SectionTitle>Entre em Contato</SectionTitle>
      <SectionSubtitle>
        Inicie sua jornada de bem-estar. Fale conosco via WhatsApp para agendar sua consulta ou acesse nosso formulário para outras dúvidas.
      </SectionSubtitle>

      <ButtonsWrapper>
        <ContactButton 
          href="https://wa.me/5521991319121 " 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <WhatsAppIcon />
        </ContactButton>
        <ContactButton 
          href="https://www.instagram.com/psi_laura_dantas/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visitar meu Instagram"
        >
          <InstagramIcon />
        </ContactButton>
        <ContactButton 
          href="https://www.linkedin.com/in/laura-dantas-414152372/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visitar meu LinkedIn"
        >
          <LinkedInIcon />
        </ContactButton>
      </ButtonsWrapper>
    </ContactSectionContainer>
  );
};

export default ContactSection;