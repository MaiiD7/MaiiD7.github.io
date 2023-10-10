import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"

// Component to display the radar chart with the selected user performance
const PerformanceChart = (props) => {

  const { performance } = props;
  
  return (
    <ResponsiveContainer width="100%" aspect={1/1} style={{borderRadius: '8px'}}>
      {/* Custom Radar Chart */}
      <RadarChart outerRadius="70%" width="100%" height="100%" data={performance} >
        {/* Polar Grid with custom polarRadius */}
        <PolarGrid stroke="#FFFFFF" radialLines={false} polarRadius={[0,12,22,40,55,66]}/>
        {/* Custom Polar Axis with custom ticks */}
        <PolarAngleAxis axisLine={true} dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 9}}/>
        {/* Radar over the grids */}
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )                              
}

export default PerformanceChart