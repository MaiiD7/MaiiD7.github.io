import { useParams } from "react-router-dom";
import LeftNavigation from "../components/LeftNavigation/LeftNavigation";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Main from "../components/Main/Main";
import { useFetchCurrentUsersInfo } from "../useDataManager";
import Loader from "react-spinner-loader";

const DashBoard = () => {
  const id = useParams().userId;

  const {rawData, firstName, userKeyData, loading, error } = useFetchCurrentUsersInfo(id);

  if(loading) {
    return <Loader show={loading} type="box" message="Chargement en cours" />
  }

  if (!rawData?.length) {
    return null
  }

  return (
    <>
      <TopNavigation/>
      <div style={{display: 'flex', width: '100%', height: 'calc(100% - 60px)'}}>
        <LeftNavigation/>
        <Main firstName={firstName} userKeyData={userKeyData}/>
      </div>
    </>
      
  )
}

export default DashBoard