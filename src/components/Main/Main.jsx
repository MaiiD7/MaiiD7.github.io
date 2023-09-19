import styled from "styled-components";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  padding: 60px 90px;
`

const Main = () => {

  return (
    <MainContainer>
      <Header/>
      <MainSection/>
    </MainContainer>
  )
}

export default Main