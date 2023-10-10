import styled from "styled-components";
import logo from "../assets/logo.png";
import maleUser from "../assets/maleUser.png";
import femaleUser from "../assets/femaleUser.png";
import { Link } from "react-router-dom";
import { useFetchLoginUsersInfo } from "../useDataManager";
import Loader from "react-spinner-loader";

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
`;

const Users = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 300px;
  background-color: #161621;
  border-radius: 20px;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    border: 1px solid red;
  }
`;

const UserName = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
`;

// Component returning the Login Page
const Login = () => {

  // Call a method to fetch the formatted data used in the page
  const {userInfos, loading, error } = useFetchLoginUsersInfo();

  // Loading spinner if th e fetch is not finished yet
  // In our simple case the fetch is too fast to actually notice it
  if(loading) {
    return <Loader show={loading} type="box" message="Chargement en cours" />
  }

  if (!userInfos?.length) {
    return null
  }

  const femaleName = `${userInfos[0].firstname} ${userInfos[0].lastname}`;
  const femaleId = userInfos[0].id;

  const maleName = `${userInfos[1].firstname} ${userInfos[1].lastname}`;
  const maleId = userInfos[1].id;

  // Return the two cards with the users data
  // Each Card links to the Dashboard Page with the user id as a parameter
  return (
    <LoginContainer>
      <a href="/">
        <img src={logo} alt="logo-sportsee" style={{ height: "100px" }} />
      </a>
      <Users>
        <Link to={`/dashboard/${femaleId}`} style={{ textDecoration: "none" }}>
          <UserCard>
            <img
              src={femaleUser}
              alt="logo-sportsee"
              style={{ height: "100px" }}
            />
            <UserName>{femaleName}</UserName>
          </UserCard>
        </Link>
        <Link to={`/dashboard/${maleId}`} style={{ textDecoration: "none" }}>
          <UserCard>
            <img
              src={maleUser}
              alt="logo-sportsee"
              style={{ height: "100px" }}
            />
            <UserName>{maleName}</UserName>
          </UserCard>
        </Link>
      </Users>
    </LoginContainer>
  );
};

export default Login;
