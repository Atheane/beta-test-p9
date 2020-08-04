import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, } from 'recharts'

const data = [
  {
    "subject": "Intensité",
    "A": 120,
    "fullMark": 150,
    "color": "#fff"
  },
  {
    "subject": "Cardio",
    "A": 98,
    "fullMark": 150
  },
  {
    "subject": "Energie",
    "A": 86,
    "fullMark": 150
  },
  {
    "subject": "Endurance",
    "A": 99,
    "fullMark": 150
  },
  {
    "subject": "Force",
    "A": 85,
    "fullMark": 150
  },
  {
    "subject": "Vitesse",
    "A": 65,
    "fullMark": 150
  }
]

function customTick({ payload, x, y, textAnchor }) {
  return (
    <g
      className="recharts-layer recharts-polar-angle-axis-tick"
    >
        <text
          radius={90}
          stroke={'none'}
          fill={'#fff'}
          x={x}
          y={y}
          className="recharts-text recharts-polar-angle-axis-tick-value"
          text-anchor={textAnchor}
        >
          <tspan x={x} dy="0em">
            {payload.value}
          </tspan>
        </text>
    </g>
  );
}


export default () => {
  return (
      <RadarChart outerRadius={90} width={250} height={250} data={data}
        style={{  backgroundColor: '#000', borderRadius: '8px' }}>
        <PolarGrid tick={false}  />
        <PolarAngleAxis
          dataKey="subject" 
          tickLine={false}
          tick={({ payload, x, y, textAnchor }) => customTick({ payload, x, y, textAnchor })}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          tick={({ payload, x, y, textAnchor }) => customTick({ payload: {}, x, y, textAnchor })}
        />
        <Radar
          name="Mike" dataKey="A" stroke="red"
          fill="red" fillOpacity={0.7}
        />
        {/* <Legend /> */}
      </RadarChart>
  )
}