import styled from "styled-components";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const Skeleton = styled.div`
  width: 100%;
  min-height: 100vh;
  `
function App() {
  return (
    <Skeleton>
      <Header/>
      <HeroSection/>
    </Skeleton>
    
  )
}

export default App
