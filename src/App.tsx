import styled from "styled-components";
import Header from "./components/Header";

const Skeleton = styled.div`
  width: 100%;
  min-height: 100vh;
  `
function App() {
  return (
    <Skeleton>
      <Header/>
    </Skeleton>
    
  )
}

export default App
