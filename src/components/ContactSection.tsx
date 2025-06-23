import React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.constants';
import CTAButton from './CTAButton';
import CTAForms from './CTAForms';

// Ícone de Localização (mantido para o mapa)


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


export const MapWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto 0;
  height: 300px;
  background-color: ${COLOR.BG.SECONDARY || '#ddd'};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;


// Componente Principal da Seção de Contato
const ContactSection: React.FC = () => {
  return (
    <ContactSectionContainer id="contact">
      <SectionTitle>Entre em Contato</SectionTitle>
      <SectionSubtitle>
        Inicie sua jornada de bem-estar. Fale conosco via WhatsApp para agendar sua consulta ou acesse nosso formulário para outras dúvidas.
      </SectionSubtitle>

      <ButtonsWrapper>
        <CTAButton text="Whatsapp" onClick={() => alert('Button clicked!')} />
        <CTAForms text= "Formulário" onClick={() => alert('Forms clicked!')} />
      </ButtonsWrapper>

      {/* Mapa de Localização - Mantido como uma visualização de endereço */}
      <MapWrapper>
        {/* Você pode incorporar um mapa do Google Maps aqui.
            Vá ao Google Maps, pesquise seu endereço, clique em "Compartilhar",
            depois "Incorporar um mapa" e copie o iframe.
        */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.331602078696!2d-43.27552912443095!3d-22.93796857922254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d21b4b9f291%3A0x5e0f7f3f2d2b2b2b!2sRua%20Dias%20da%20Cruz%2C%20100%20-%20M%C3%A9ier%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020720-012%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" // Substitua pelo iframe real do Google Maps
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Consultório"
        ></iframe>
      </MapWrapper>
    </ContactSectionContainer>
  );
};

export default ContactSection;