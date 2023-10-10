import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 52%;
  background-color: #FBFBFB;
  border-radius: 8px;
  display: flex;
  align-items: end;
`
// Component to display the bar chart with the selected user activity
const ActivityBarChart = (props) => {
  const { activity } = props;

  // Tooltip to display the bars infos on mouse hover
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{backgroundColor: '#E60000', color: 'white', fontSize: '12px', fontWeight: 400}}>
          <p style={{textAlign: 'center', padding: '20px 10px 15px 10px', lineHeight: 0}}>{`${payload[0].value}kg`}</p>
          <p style={{textAlign: 'center', padding: '15px 10px 20px 10px', lineHeight: 0}}>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%" style={{borderRadius: '8px'}}>
      {/* BarChart with custom bar size */}
      <BarChart width="100%" height="100%" data={activity} margin={{top: 20}} barSize={8}>
        {/* Overlay Text */}
        <text
          x='3%'
          y='8%'
          style={{fontSize: '14px', fontWeight: 500, color: '#20253A'}}
        >
          Activité quotidienne
        </text>
        {/* Custom Grid */}
        <CartesianGrid vertical={false} strokeDasharray="2" opacity={0.6}/>
        {/* Horizontal axis */}
        <XAxis dy={5} dataKey="day" tickLine={false} axisLine={{ stroke: '#9B9EAC', fontWeight: 500}} tick={{ fill: '#9B9EAC'}} opacity={0.7}/>
        {/* Vertical Axis for the weight */}
        <YAxis yAxisId="Poids (kg)" tickLine={false} axisLine={false} orientation="right" tick={{ fill: '#9B9EAC', fontWeight: 500}} opacity={0.7} domain={['dataMin - 1', 'dataMax + 3']} interval={0}/>
        {/* Vertical Axis for the Calories */}
        <YAxis hide yAxisId="Calories brûlées (kCal)" tickLine={false} axisLine={false} orientation="right" tick={false}/>
        <Tooltip cursor={{fill: '#C4C4C4'}} content={<CustomTooltip/>} />
        {/* Legent on top of the chart */}
        <Legend iconType="circle" iconSize={8} verticalAlign="top" align="right" wrapperStyle={{top: 0}} formatter={(value) => <span style={{ color: '#9B9EAC', fontSize: '13px', fontWeight: 500, marginRight: '25px' }}>{value}</span>}/>
        {/* Custom bars with radius */}
        <Bar yAxisId="Poids (kg)" dataKey="Poids (kg)" fill="#282D30"  radius={[20,20,0,0]}/>
        <Bar yAxisId="Calories brûlées (kCal)" dataKey="Calories brûlées (kCal)" fill="#E60000" radius={[20,20,0,0]}/>   
      </BarChart>
  </ResponsiveContainer>
  </Container>
  )
  
}

export default ActivityBarChart