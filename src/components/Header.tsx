import { useState } from 'react';
import styled from 'styled-components';
import CTAButton from './CTAButton';
import COLOR from '../constants/colors.constants';

// Styled Components

// Header Container - Ajustado para layout responsivo
export const HeaderContainer = styled.header`
  background-color: ${COLOR.BG.PRIMARY};
  padding: 20px;
  color: ${COLOR.TEXT.TITLE};
  display: flex;
  justify-content: space-between; /* Ajustado para alinhar o grupo logo/título e a navegação */
  align-items: center;
  position: fixed; /* Para posicionar o MobileMenu */
  top: 0;
  left: 0;
  width: 100%; /* Ocupa toda a largura da tela */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para destacar o header */
  z-index: 1000; /* Garante que o header fique sobre outros conteúdos */

  @media (min-width: 768px) {
    padding: 20px 40px;
    position: relative;
  }
`;

// Logo
export const Logo = styled.img`
  width: 50px; /* Tamanho da sua logo */
  height: auto;
  display: block;
`;

// Título - Visível apenas no desktop, agora dentro do wrapper
export const Title = styled.h1`
  font-size: 1.8em;
  margin: 0; /* Remove margens padrão */
  display: none; /* Oculta no mobile (a logo será a única visível na esquerda) */

  @media (min-width: 768px) {
    display: block; /* Exibe no desktop */
    text-align: left;
    margin-left: 15px; /* Espaçamento entre a logo e o título no desktop */
  }
`;

// Novo Wrapper para a Logo e o Título
export const LogoTitleWrapper = styled.div`
  display: flex; /* Permite que Logo e Title fiquem lado a lado */
  align-items: center; /* Alinha verticalmente a logo e o título */

  /* No mobile, este wrapper se comporta como um item flex normal (horizontal)
     Mas o Title está com display:none no mobile, então só a Logo aparece. */
  @media (min-width: 768px) {
    /* No desktop, já está configurado para flex e alinhar */
  }
`;

// Navegação Principal - Visível apenas no desktop
export const Nav = styled.nav`
  display: none; /* Oculta no mobile */

  @media (min-width: 768px) {
    display: flex; /* Exibe no desktop */
    flex-direction: row;
    gap: 15px;
    align-items: center;
  }
`;

// Link de Navegação
export const NavLink = styled.a`
  color: ${COLOR.TEXT.SUBTITLE};
  text-decoration: none; // Por padrão, sem sublinhado
  font-weight: bold;
  padding: 5px 10px;
  transition: text-decoration 0.3s ease-in-out, color 0.3s ease;

  &:hover {
    text-decoration: underline; 
  }
`;

// Interface para as props das barras do hambúrguer
interface HamburgerBarProps {
  open: boolean;
  position: 'top' | 'middle' | 'bottom';
}

// Barra Individual do Hambúrguer - Componente interno
export const HamburgerBar = styled.div<HamburgerBarProps>`
  width: 25px;
  height: 3px;
  background: ${COLOR.TEXT.TITLE};
  border-radius: 5px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  ${({ open, position }) => {
    if (position === 'top') {
      return `
        transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
      `;
    }
    if (position === 'middle') {
      return `
        opacity: ${open ? '0' : '1'};
        transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
      `;
    }
    if (position === 'bottom') {
      return `
        transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
      `;
    }
  }}
`;

// Botão do Hambúrguer - Visível apenas no mobile
export const HamburgerButton = styled.button`
  display: flex; /* Exibe no mobile */
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001; /* Fica acima do menu mobile */

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none; /* Oculta no desktop */
  }
`;

// Menu Mobile - Desliza da direita
export const MobileMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.BG.PRIMARY};
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-100%')}; /* Desliza da direita */
  width: 70%; /* Largura do menu lateral */
  height: 100vh; /* Ocupa toda a altura da viewport */
  padding-top: 80px; /* Espaço para não cobrir o header */
  box-shadow: -2px 0 5px rgba(0,0,0,0.2);
  transition: right 0.3s ease-in-out;
  z-index: 999; /* Fica abaixo do Header, mas acima do resto do conteúdo */
  overflow-y: auto; /* Permite rolagem se o conteúdo for grande */

  /* Estiliza os NavLinks dentro do MobileMenu */
  a {
    color: ${COLOR.TEXT.TITLE};
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    &:last-child {
      border-bottom: none;
    }
  }

  /* Oculta o MobileMenu no desktop */
  @media (min-width: 768px) {
    display: none;
  }
`;


// Componente Header
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <LogoTitleWrapper> 
        <Logo src="../assets/logo-removebg-preview.png" alt="Logo" />
        <Title>Laura Dantas</Title>
      </LogoTitleWrapper>

      {/* Navegação para Desktop */}
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#specialities">Especialidades</NavLink>
        <NavLink href="#approach">Abordagem</NavLink>
        <NavLink href="#FAQ">FAQ</NavLink>
        <NavLink href="#contact">Contato</NavLink>
        <CTAButton text="Whatsapp" href="#get-started" className="cta-button" />
      </Nav>

      {/* Botão Hambúrguer (só visível no mobile) */}
      <HamburgerButton onClick={toggleMenu} aria-label="Toggle Menu">
        <HamburgerBar open={menuOpen} position="top" />
        <HamburgerBar open={menuOpen} position="middle" />
        <HamburgerBar open={menuOpen} position="bottom" />
      </HamburgerButton>

      {/* Menu Mobile (visível apenas quando 'open' é true) */}
      <MobileMenu open={menuOpen}>
        <NavLink href="#home" onClick={toggleMenu}>Home</NavLink>
        <NavLink href="#about" onClick={toggleMenu}>Sobre</NavLink>
        <NavLink href="#specialities" onClick={toggleMenu}>Especialidades</NavLink>
        <NavLink href="#approach" onClick={toggleMenu}>Abordagem</NavLink>
        <NavLink href="#FAQ" onClick={toggleMenu}>FAQ</NavLink>
        <NavLink href="#contact" onClick={toggleMenu}>Contato</NavLink>
        <CTAButton text="Whatsapp" href="#get-started" onClick={toggleMenu} className="cta-button" />
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;