import styled from "styled-components";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import { data } from "../../assets/mockedData";

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  padding: 30px 60px;
`

const Main = (props) => {
  const { firstName, userKeyData } = props;

  return (
    <MainContainer>
      <Header firstName={firstName} userKeyData={userKeyData}/>
      <MainSection userKeyData={userKeyData}/>
    </MainContainer>
  )
}

export default Main