import styled from 'styled-components';
import COLOR from '../constants/colors.constants';

const StyledButton = styled.button`
  background-color: ${COLOR.CTABUTTON.BG_FORMS};
  color: ${COLOR.TEXT.INVERTED};
  font-weight: bold;
  margin-left: 15px;
  padding: 0.7rem 1.5rem; 
  border-radius: 2.5rem; // rounded
  border: none;
  cursor: pointer;
  text-decoration: none; // Para o caso de ser usado dentro de um <a>
  display: inline-block; // Para que o <a> se comporte como um botão
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); // sombra leve
  z-index: 1000; // para garantir que fique acima de outros elementos

  &:hover {
    background-color: ${COLOR.CTABUTTON.BG_FORMS_HOVER}; 
  }
`;

const CTAForms: React.FC = () => {
    return (
    <a href='https://forms.gle/JaSy6kYVuLEwBB8X9' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <StyledButton as="span">
        Formulário
      </StyledButton>
    </a>
  );
};

export default CTAForms;
