import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const AverageSessionChart = (props) => {

  const { sessions } = props;
  
  return (
    <ResponsiveContainer width="100%" aspect={1/1} style={{borderRadius: '8px'}}>                              
    <LineChart width={730} height={250} data={sessions}
      margin={{ top: 20, right: 12, left: 10, bottom: 10}}>
      <XAxis dataKey="day" axisLine={false} tickLine={false}/>
      <Tooltip />
      <Line type="monotone" dataKey="time" stroke="#FFFFFF" dot={false} activeDot={true}/>
    </LineChart>
  </ResponsiveContainer>
  )
}

export default AverageSessionChart