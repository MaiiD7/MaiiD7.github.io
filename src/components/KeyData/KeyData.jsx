import styled from "styled-components";

const KeyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 25%;
`

const KeyDataCard = styled.div`
  width: 100%;
  height: 20%;
  background-color: #FBFBFB;
  border-radius: 5px;
  display: flex;
  align-items: center;
`
const IconCard = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Component to display the key data on the right side of the dashboard
const KeyData = (props) => {
  // Array containing the formatted data (icon, count, units, element and  color for each set)
  const { userKeyData } = props;

  return (
    <KeyDataContainer>
      {/* Iteration on the data Array to display the 4 KeyDataCards */}
      {userKeyData.map((keyData) => (
        <KeyDataCard key={keyData.element}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 20px', gap: '20px'}}>
            <IconCard style={{backgroundColor: keyData.color}}>
              <img src={keyData.icon} />
            </IconCard>
            <div>
              <p style={{fontSize: '20px', fontWeight: 600, lineHeight: 0.3, marginTop: '10px'}}>{keyData.count}{keyData.unity}</p>
              <p style={{fontSize: '12px', fontWeight: 500, lineHeight: 0, color: '#74798C'}}>{keyData.element}</p>
            </div>
          </div>
        </KeyDataCard>
      ))}
    </KeyDataContainer>
  )
}

export default KeyData