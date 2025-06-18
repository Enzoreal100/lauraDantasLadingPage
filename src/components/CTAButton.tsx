import styled from 'styled-components';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  href?: string; 
  className?: string;
}

const StyledButton = styled.button`
  background-color: #128C7E; // bg-blue-500
  color: white;
  font-weight: bold;
  padding: 0.4rem 1rem; 
  border-radius: 2.5rem; // rounded
  border: none;
  cursor: pointer;
  text-decoration: none; // Para o caso de ser usado dentro de um <a>
  display: inline-block; // Para que o <a> se comporte como um botão

  &:hover {
    background-color: #1d4ed8; // hover:bg-blue-700
  }

  // Permite adicionar classes extras se necessário
  &.${(props) => props.className} {
    /* Estilos adicionais podem ser aplicados aqui se className for passado */
  }
`;

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick, href, className }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <StyledButton as="span" className={className} onClick={onClick}> {/* Usar 'as="span"' para evitar aninhamento de botões e permitir onClick se necessário */}
          {text}
        </StyledButton>
      </a>
    );
  }

  return (
    <StyledButton className={className} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default CTAButton;
