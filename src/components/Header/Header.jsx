import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 130px;
`

// Component to display the header of the DashBoard Page
const Header = (props) => {
  // Only needs the user firstName passed as props
  const { firstName } = props;

  return (
    <Container>
      <h2 style={{display: 'flex', gap: '15px', fontSize: '42px', fontWeight: 500, lineHeight: '0px', margin: '0px'}}>
        <p>Bonjour</p>
        <p style={{color: 'red'}}>{firstName}</p>
      </h2>
      <p style={{lineHeight: '0px'}}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </Container>
  )
}

export default Header