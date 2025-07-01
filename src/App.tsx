import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;