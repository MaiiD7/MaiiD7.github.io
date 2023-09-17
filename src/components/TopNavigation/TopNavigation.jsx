import styled from "styled-components";
import logo from "../../assets/logo.png"

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #020203;
  max-width: 100%;
  height: 30px;
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 100%;
`

const NavBarLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  color: white;
  cursor: pointer;
`

const TopNavigation = () => (
    <TopBar>
      <a href="/">
        <img src={logo} alt="logo-sportsee" style={{marginTop: '10px', height: '45px'}}/>
      </a>
      <LinksContainer>
        <NavBarLink>Accueil</NavBarLink>
        <NavBarLink>Profil</NavBarLink>
        <NavBarLink>Réglage</NavBarLink>
        <NavBarLink>Communauté</NavBarLink>
      </LinksContainer>
    </TopBar>
)

export default TopNavigation