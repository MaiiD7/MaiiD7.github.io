import { useParams } from "react-router-dom";
import LeftNavigation from "../components/LeftNavigation/LeftNavigation";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Main from "../components/Main/Main";
import { useFetchCurrentUsersInfo } from "../useDataManager";
import Loader from "react-spinner-loader";

// Component returning the Dashboard Page
const DashBoard = () => {

  // Get user id from the url parameter
  const id = useParams().userId;

  // // Call a method to fetch the formatted data used in the page
  // The different data are passed down to all the components as props
  const {rawData, firstName, userKeyData, score, performance, sessions, activity, loading, error } = useFetchCurrentUsersInfo(id);

  // Loading spinner if th e fetch is not finished yet
  // In our simple case the fetch is too fast to actually notice it
  if(loading) {
    return <Loader show={loading} type="box" message="Chargement en cours" />
  }

  if (!rawData?.length) {
    return null
  }

  // Returns the navigation bars and the main component
  return (
    <>
      <TopNavigation/>
      <div style={{display: 'flex', width: '100%', height: 'calc(100% - 60px)'}}>
        <LeftNavigation/>
        <Main firstName={firstName} userKeyData={userKeyData} score={score} performance={performance} sessions={sessions} activity={activity} />
      </div>
    </>
      
  )
}

export default DashBoard