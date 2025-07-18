import styled from 'styled-components';
import COLOR from '../constants/colors.constants';

const FooterContainer = styled.footer`
  background-color: ${COLOR.FOOTER.TEXT};
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;

  @media (max-width: 1024px) {
    padding: 15px;
  }
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 1rem;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const FooterSubtext = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
  color: ${COLOR.FOOTER.SUBTEXT};
  
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Guaracylaura Sylvestre Dantas</FooterText>
      <FooterText>CRP: 05/75363</FooterText>
      <FooterText>lauradantas.psico@gmail.com</FooterText>
      <FooterSubtext>Developed by Enzo Real © 2025 All rights reserved</FooterSubtext>
    </FooterContainer>
  );
};

export default Footer;
