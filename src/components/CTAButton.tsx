import styled from 'styled-components';
import COLOR from '../constants/colors.constants';

const StyledButton = styled.button`
  background-color: ${COLOR.CTABUTTON.BG};
  color: ${COLOR.TEXT.TITLE};
  font-weight: bold;
  padding: 0.7rem 2rem; 
  border-radius: 2.5rem; // rounded
  border: none;
  cursor: pointer;
  text-decoration: none; // Para o caso de ser usado dentro de um <a>
  display: inline-block; // Para que o <a> se comporte como um botão
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); // sombra leve
  z-index: 1000; // para garantir que fique acima de outros elementos

  &:hover {
    background-color: ${COLOR.CTABUTTON.BG_HOVER}; 
  }

  // Permite adicionar classes extras se necessário
  &.${(props) => props.className} {
    /* Estilos adicionais podem ser aplicados aqui se className for passado */
  }

  @media (max-width: 1024px) { // ou 768px, dependendo do seu design
    margin: 0.3rem auto; // Centraliza o botão em telas menores
  }
`;

const CTAButton: React.FC = () => {
  return (
    <a href='#contact' style={{ textDecoration: 'none' }}>
      <StyledButton as="span">
        Contato
      </StyledButton>
    </a>
  );
};

export default CTAButton;
