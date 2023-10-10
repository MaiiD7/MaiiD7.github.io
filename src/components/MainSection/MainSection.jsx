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
  gap: 30px;
  height: 100%;
  width: 72%;
`

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: bottom
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
// Main section to display the charts and the key data
const MainSection = (props) => {

  // Gets most of the formatted data as props
  // To distribute it amongst all the key data and chart components
  const { userKeyData, score, performance, sessions, activity } = props;

  return (
    <Container>

      <MainChartsContainer>

        {/* Bar Chart Component (Activity) */}
        <ActivityBarChart activity={activity} />
        
        <ChartsContainer>

          {/* Line Chart Component (Average Session) */}
          <SmallChartsContainer style={{background: 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 69%, rgba(232,16,16,1) 69%, rgba(232,16,16,1) 100%)'}}>
            <AverageSessionChart sessions={sessions} />
          </SmallChartsContainer>

          {/* Radar Chart Component (Performance) */}
          <SmallChartsContainer style={{backgroundColor: '#282D30'}}>
            <PerformanceChart performance={performance}/>
          </SmallChartsContainer>

          {/* Radial Bar Chart (Score) */}
          <SmallChartsContainer style={{backgroundColor: '#FBFBFB', position: 'relative'}}>
            <ScoreChart score={score}/>
            <ScoreInfosContainer>
              <p style={{lineHeight: 0, fontSize: '20px', fontWeight: 600}}>{score[0].score*100}%</p>
              <p style={{lineHeight: 1,fontSize: '10px', fontWeight: 600, color: '#74798C'}}>de votre objectif</p>
            </ScoreInfosContainer>
          </SmallChartsContainer>

        </ChartsContainer>

      </MainChartsContainer>

      {/* Key Data Component */}
      <KeyData userKeyData={userKeyData} />

    </Container>
  )
  
}

export default MainSection