import styled from "styled-components";
import { css } from "styled-components";
import { About } from "./components/About";

import { Intro } from "./components/Intro";

const Container = styled.div`
  height:100vh;
  overflow:hidden;
  position:relative; 
`

const Shape = css`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
`

const IntroShape = styled.div`
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 49% 100%);
  background-color: #59b256;
  ${Shape}
`

function App() {
  return (
    <>
      <Container>
        <Intro/>
        <IntroShape/>
      </Container>
      <Container>
        <About/>
      </Container>
    </>
  );
}

export default App;
