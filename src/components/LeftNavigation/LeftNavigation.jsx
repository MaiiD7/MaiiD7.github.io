import styled from "styled-components";
import meditation from "../../assets/icons/swim.png";
import swim from "../../assets/icons/meditation.png";
import bike from "../../assets/icons/bike.png";
import weight from "../../assets/icons/weight.png";

const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0px;
  background-color: #020203;
  height: 100%;
  width: 90px;
  position: relative;
`

const NavIcon = styled.a`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Copyright = styled.div`
  position: absolute;
  bottom: 70px;
  left: 0px;
  width: fit-content;
  white-space: nowrap;
  color: white;
  font-size: 8px;
  font-weight: 300;
  transform: rotate(-90deg);
`

const icons = [meditation, swim, bike, weight];

const LeftNavigation = () => (
  <LeftBar>
    {icons.map((icon, index) => (
      <NavIcon key={`icon_${index}`}>
        <img src={icon} alt={`icon_${index}`} style={{width: '30px'}}/>
      </NavIcon>
    ))}
    <Copyright>Copyright, SportSee 2020</Copyright>
  </LeftBar>
  
)

export default LeftNavigation