import styled from "styled-components";

export const ContainerSC = styled.section`
  margin: 0 auto;
  height: 100vh;
  padding: 3rem; 

  box-sizing: border-box;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 100px 1fr 50px;
  grid-template-areas:
    "headerSC"
    "mainSC"
    "footerSC";
  background-color: #2b3d54;
`;