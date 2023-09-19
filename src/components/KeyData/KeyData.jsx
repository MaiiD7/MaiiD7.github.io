import styled from "styled-components";

const KeyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 27%;
  border: 2px solid green;
`

const KeyDataCard = styled.div`
  width: 100%;
  height: 20%;
  border: 2px solid purple;
`

const KeyData = () => {

  return (
    <KeyDataContainer>
      <KeyDataCard>
        KeyData Card
      </KeyDataCard>
      <KeyDataCard>
        KeyData Card
      </KeyDataCard>
      <KeyDataCard>
        KeyData Card
      </KeyDataCard>
      <KeyDataCard>
        KeyData Card
      </KeyDataCard>
    </KeyDataContainer>
  )
}

export default KeyData