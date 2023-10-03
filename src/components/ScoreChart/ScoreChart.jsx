import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis, Legend  } from "recharts";

const ScoreChart = (props) => {

  const { score } = props;

  return (
    <ResponsiveContainer width="100%" aspect={1/1} style={{borderRadius: '8px'}}>
      <RadialBarChart
        innerRadius="90%" 
        outerRadius="105%" 
        data={score} 
        startAngle={90} 
        endAngle={450}
        style={{borderRadius: '8px'}}
      >
        <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
        <RadialBar angleAxisId={0} dataKey='score' cornerRadius={20}/>
        <Legend iconSize={0} layout='vertical' verticalAlign='top' align="left"
        formatter={(value) => <span style={{ color: '#20253A', fontSize: '13px', fontWeight: 600 }}>{value}</span>}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default ScoreChart