import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"


const PerformanceChart = (props) => {

  const { performance } = props;
  
  return (
    <ResponsiveContainer width="100%" aspect={1/1} style={{borderRadius: '8px'}}>
      <RadarChart outerRadius="70%" width="100%" height="100%" data={performance} >
        <PolarGrid stroke="#FFFFFF" radialLines={false} polarRadius={[0,12,22,40,55,66]}/>
        <PolarAngleAxis axisLine={true} dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 9}}/>
        {/* <PolarRadiusAxis axisLine={false} angle={30} domain={[0, 150]} /> */}
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )                              
}

export default PerformanceChart