import { useParams } from "react-router-dom";
import LeftNavigation from "../components/LeftNavigation/LeftNavigation";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Main from "../components/Main/Main";

const DashBoard = () => {
  // const id = useParams().userId;

  return (
    <>
      <TopNavigation/>
      <div style={{display: 'flex', width: '100%', height: 'calc(100% - 60px)'}}>
        <LeftNavigation/>
        <Main/>
      </div>
      
    </>
      
  )
}

export default DashBoard