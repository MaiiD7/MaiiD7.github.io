import styled from "styled-components";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import { data } from "../../assets/mockedData";
import breakpoint from 'styled-components-breakpoint';

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  ${breakpoint('xs')`
    padding: 30px 2%;
  `}
  ${breakpoint('lg')`
    padding: 30px 3%;
  `}
  ${breakpoint('xl')`
    padding: 30px 13%;
  `}
`

const Main = (props) => {
  const { firstName, userKeyData, score, performance, sessions, activity } = props;

  return (
    <MainContainer>
      <Header firstName={firstName} userKeyData={userKeyData}/>
      <MainSection userKeyData={userKeyData} score={score} performance={performance} sessions={sessions} activity={activity} />
    </MainContainer>
  )
}

export default Main