import { useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const AverageSessionChart = (props) => {

  const { sessions } = props;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{backgroundColor: '#FFFFFF', color: 'black', fontSize: '12px', fontWeight: 500}}>
          <p style={{textAlign: 'center', padding: '15px 10px', lineHeight: 0}}>{`${payload[0].value}kg`}</p>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <ResponsiveContainer width="100%" aspect={1/1} style={{borderRadius: '8px'}}>                              
    <LineChart data={sessions} margin={{top: 50}}>
      <text
        x='10%'
        y='15%'
        style={{fontSize: '14px', fontWeight: 500, fill: '#FFFFFF', opacity: 0.7}}
      >
        Durée moyenne des
      </text>
      <text
        x='10%'
        y='22%'
        style={{fontSize: '14px', fontWeight: 500, fill: '#FFFFFF', opacity: 0.7}}
      >
        sessions
      </text>
      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF', fontSize: '12px'}} opacity={0.7}/>
      <YAxis hide domain={['dataMin - 12', 'dataMax']}/>
      <Tooltip cursor={false} content={<CustomTooltip/>}/>
      <Line type="natural" dataKey="time" stroke="#FFFFFF" strokeWidth={1.5} dot={false} activeDot={{strokeWidth: 0.2}}/>
    </LineChart>
  </ResponsiveContainer>
  )
}

export default AverageSessionChart