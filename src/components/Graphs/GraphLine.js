import React from 'react'
import { LineChart, XAxis, YAxis, Line, Tooltip, Legend } from 'recharts'

const data = [
  {
    day: "L",
    sessionLength: 30
  },
  {
      day: "M",
      sessionLength: 23
  },
  {
      day: "M",
      sessionLength: 45
  },
  {
      day: "J",
      sessionLength: 50
  },
  {
      day: "V",
      sessionLength: 0
  },
  {
      day: "S",
      sessionLength: 0
  },
  {
      day: "D",
      sessionLength: 60
  }
]

export default () => {
  return (
    <div style={{ backgroundColor: '#FF0000', borderRadius: '8px' }}>
      <LineChart width={250} height={250} data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
      >
        <XAxis
          dataKey="day"
          padding={{ left: 5, right: 5, top: 5, bottom: 5 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip style={{color: "black"}}/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff" />
      </LineChart>
    </div>
  )
}