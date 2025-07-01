import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';
import Footer from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Envolva a aplicação com o BrowserRouter */}
      <App />
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
