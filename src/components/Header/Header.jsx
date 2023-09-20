import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 150px;
`

const Header = (props) => {
  const { userData } = props;
  console.log(userData);

  return (
    <Container>
      <h2 style={{display: 'flex', gap: '15px', fontSize: '42px', fontWeight: 500, lineHeight: '0px', margin: '0px'}}>
        <p>Bonjour</p>
        <p style={{color: 'red'}}>{userData.userInfos.firstName}</p>
      </h2>
      <p style={{lineHeight: '0px'}}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </Container>
  )
}

export default Header