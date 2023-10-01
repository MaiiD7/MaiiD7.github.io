import styled from "styled-components";
import KeyData from "../KeyData/KeyData";
import BarChart from "../BarChart/BarChart";
import AverageSessionChart from "../AverageSessionChart/AverageSession";
import PerformanceChart from "../PerformanceChart/PerformanceChart";
import ScoreChart from "../ScoreChart/ScoreChart";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  padding: 10px 0px; 
  display: flex;
  justify-content: space-between;
`

const MainChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 72%;
  border: 2px solid green;
`

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45%;
  width: 100%;
  border: 2px solid yellow;
`

const SmallChartsContainer = styled.div`
  height: 100%%;
  width: 30%;
  border: 2px solid orange;
`

const MainSection = (props) => {

  const { userKeyData } = props;

  return (
    <Container>
    <MainChartsContainer>
      <BarChart/>
      <ChartsContainer>
        <SmallChartsContainer>
          <AverageSessionChart/>
        </SmallChartsContainer>
        <SmallChartsContainer>
          <PerformanceChart/>
        </SmallChartsContainer>
        <SmallChartsContainer>
          <ScoreChart/>
        </SmallChartsContainer>
      </ChartsContainer>
    </MainChartsContainer>
    <KeyData userKeyData={userKeyData} />
  </Container>
  )
  
}

export default MainSection