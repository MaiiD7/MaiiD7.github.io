import styled from "styled-components";
import KeyData from "../KeyData/KeyData";
import ActivityBarChart from "../ActivityBarChart/ActivityBarChart";
import AverageSessionChart from "../AverageSessionChart/AverageSession";
import PerformanceChart from "../PerformanceChart/PerformanceChart";
import ScoreChart from "../ScoreChart/ScoreChart";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
`

const MainChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 72%;
`

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  width: 100%;
`

const SmallChartsContainer = styled.div`
  height: 0;
  width: 30%;
  padding-bottom: 30%;
  display: flex;
  justify-content: center;
  aligh-items: center;
  border-radius: 8px;
`

const ScoreInfosContainer = styled.div`
  border-radius: 100%;
  width: 57%;
  height: 57%;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: white;
  z-index: 15;
  transform: translate(-50.5%, -50.5%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainSection = (props) => {

  const { userKeyData, score, performance, sessions, activity } = props;

  return (
    <Container>

      <MainChartsContainer>

        <ActivityBarChart activity={activity} />
        
        <ChartsContainer>
          <SmallChartsContainer style={{backgroundColor: '#FF0000'}}>
            <AverageSessionChart sessions={sessions} />
          </SmallChartsContainer>

          <SmallChartsContainer style={{backgroundColor: '#282D30'}}>
            <PerformanceChart performance={performance}/>
          </SmallChartsContainer>

          <SmallChartsContainer style={{backgroundColor: '#FBFBFB', position: 'relative'}}>
            <ScoreChart score={score}/>
            <ScoreInfosContainer>
              <p style={{lineHeight: 0, fontSize: '20px', fontWeight: 600}}>{score[0].score*100}%</p>
              <p style={{lineHeight: 1,fontSize: '10px', fontWeight: 600, color: '#74798C'}}>de votre objectif</p>
            </ScoreInfosContainer>
          </SmallChartsContainer>
        </ChartsContainer>

      </MainChartsContainer>

      <KeyData userKeyData={userKeyData} />

    </Container>
  )
  
}

export default MainSection