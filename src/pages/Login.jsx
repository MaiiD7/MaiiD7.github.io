import styled from "styled-components";
import logo from "../assets/logo.png";
import maleUser from "../assets/maleUser.png";
import femaleUser from "../assets/femaleUser.png";
import user12 from "../assets/mockedData/user12.json";
import user18 from "../assets/mockedData/user18.json";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
  gap: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #020203;
`

const Users = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
`

const UserCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 300px;
  background-color: #161621;
  border-radius: 20px;
  border: 2px solid red;
  cursor: pointer;
`

const UserName = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
`

const Login = () => {

  const femaleName = `${user18.data.userInfos.firstName} ${user18.data.userInfos.lastName}`
  const femaleId = user18.data.id

  const maleName = `${user12.data.userInfos.firstName} ${user12.data.userInfos.lastName}`
  const maleId = user12.data.id

  return (
    <LoginContainer>
      <a href="/">
        <img src={logo} alt="logo-sportsee" style={{height: '100px'}}/>
      </a>
      <Users>
        <Link to={`/dashboard/${femaleId}`} style={{textDecoration: 'none'}}>
          <UserCard>
            <img src={femaleUser} alt="logo-sportsee" style={{height: '100px'}}/>
            <UserName>{femaleName}</UserName>
          </UserCard>
        </Link>
        <Link to={`/dashboard/${maleId}`} style={{textDecoration: 'none'}}>
          <UserCard>
            <img src={maleUser} alt="logo-sportsee" style={{height: '100px'}}/>
            <UserName>{maleName}</UserName>
          </UserCard>
        </Link>
        
      </Users>
    </LoginContainer>
      
  )
}

export default Login