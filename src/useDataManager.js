import { useState, useEffect } from 'react';
import axios from 'axios';

import energyIcon from "./assets/icons/energy.png";
import chickenIcon from "./assets/icons/chicken.png";
import appleIcon from "./assets/icons/apple.png";
import cheeseburgerIcon from "./assets/icons/cheeseburger.png";

export const useFetchLoginUsersInfo = () => {
  // Defining states
  const [users, setUsers] = useState([]);
  const [userInfos, setUserInfos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // URLs used for the fetch
  const urls = [
    'http://localhost:3000/user/12',
    'http://localhost:3000/user/18'
  ];

  // Requests made by axios.all()
  const requests = urls.map((url) => axios.get(url));
  
    
  useEffect(() => {
    setLoading(true);
    axios.all(requests).then((responses) => {
      const tempData = []
      responses.forEach((response) => {
        tempData.push(response.data.data);
      });
      return setUsers(tempData)
    }).catch(() => setError(true))
  }, []);
  
  useEffect(() => {
    if (users.length) {
      setUserInfos([
        {
          id: users[1].id,
          firstname: users[1].userInfos.firstName,
          lastname: users[1].userInfos.lastName
        },
        {
          id: users[0].id,
          firstname: users[0].userInfos.firstName,
          lastname: users[0].userInfos.lastName
        }
      ])
    setLoading(false)
    }
  }, [users]);

  return {userInfos, loading, error}

}
  
export const useFetchCurrentUsersInfo = (id) => {

  // Defining states
  const [rawData, setRawData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [userKeyData, setUserKeyData] = useState([]);
  const [score, setScore] = useState(0);
  const [performance, setPerformance] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // URLs used for the fetch
  const urls = [
    `http://localhost:3000/user/${id}`,
    `http://localhost:3000/user/${id}/activity`,
    `http://localhost:3000/user/${id}/average-sessions`,
    `http://localhost:3000/user/${id}/performance`,
  ];

  // Requests made by axios.all()
  const requests = urls.map((url) => axios.get(url));
  
    
  useEffect(() => {
    setLoading(true);
    axios.all(requests).then((responses) => {
      const tempData = []
      responses.forEach((response) => {
        tempData.push(response.data.data);
      });
      return setRawData(tempData)
    }).catch(() => setError(true))
  }, []);
  
  useEffect(() => {
    if (rawData.length) {

      setFirstName(rawData[0].userInfos.firstName);

      setScore([{
        "name": "Score",
        "score": rawData[0].todayScore ? rawData[0].todayScore : rawData[0].score,
        "fill": "#FF0000"
      }]);

      setActivity(rawData[1].sessions.map((session, index) => (
        {
          "day": index+1,
          "Poids (kg)": session.kilogram,
          "Calories brûlées (kCal)": session.calories
        }
      )))

      const weekDays = ["L","M","M","J","V","S","D"];
      const tempData = rawData[2].sessions.map((session, index) => (
        {
          "day": weekDays[index],
          "time": session.sessionLength
        }
      ))
      setSessions([
        {
          "day": "",
          "time": tempData[0].time
        },
        ...tempData,
        {
          "day": "",
          "time": tempData[tempData.length-1].time
        }
      ]   )

      setPerformance([
        {
          "subject": "Intensité",
          "A": rawData[3].data[5].value,
          "fullMark": 250
        },
        {
          "subject": "Vitesse",
          "A": rawData[3].data[4].value,
          "fullMark": 250
        },
        {
          "subject": "Force",
          "A": rawData[3].data[3].value,
          "fullMark": 250
        },
        {
          "subject": "Endurance",
          "A": rawData[3].data[2].value,
          "fullMark": 250
        },
        {
          "subject": "Energie",
          "A": rawData[3].data[1].value,
          "fullMark": 250
        },
        {
          "subject": "Cardio",
          "A": rawData[3].data[0].value,
          "fullMark": 250
        }
      ])

      rawData[0].keyData.calorieCount = rawData[0].keyData.calorieCount.toString();
      rawData[0].keyData.calorieCount = rawData[0].keyData.calorieCount.slice(0,1) + ',' + rawData[0].keyData.calorieCount.slice(1,rawData[0].keyData.calorieCount.length);
      
      
      setUserKeyData([
        {
          icon: energyIcon,
          count: rawData[0].keyData.calorieCount,
          unity: 'kCal',
          element: 'Calories',
          color: 'rgba(255, 0, 0, 0.1)'
        },
        {
          icon: chickenIcon,
          count: rawData[0].keyData.proteinCount,
          unity: 'g',
          element: 'Proteines',
          color: 'rgba(74, 184, 255, 0.1)'
        },
        {
          icon: appleIcon,
          count: rawData[0].keyData.carbohydrateCount,
          unity: 'g',
          element: 'Glucides',
          color: 'rgba(253, 204, 12, 0.1)'
        },
        {
          icon: cheeseburgerIcon,
          count: rawData[0].keyData.lipidCount,
          unity: 'g',
          element: 'Lipides',
          color: 'rgba(253, 81, 129, 0.1)'
        }
      ]);

      setLoading(false)
    }
  }, [rawData]);

  return {rawData, firstName, userKeyData, score, performance, sessions, activity, loading, error}

}
