import styled from "styled-components";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import { data } from "../../assets/mockedData";

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  padding: 60px 90px;
`

const Main = (props) => {
  const { userId } = props;
  const userData = data[`user${userId}`];

  return (
    <MainContainer>
      <Header userData={userData}/>
      <MainSection/>
    </MainContainer>
  )
}

export default Main