import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  {
      name: 1,
      kilogram: 80,
      calories: 240
  },
  {
      name: 2,
      kilogram: 80,
      calories: 220
  },
  {
      name: 3,
      kilogram: 81,
      calories: 280
  },
  {
      name: 4,
      kilogram: 81,
      calories: 290
  },
  {
      name: 5,
      kilogram: 80,
      calories: 160
  },
  {
      name: 6,
      kilogram: 78,
      calories: 162
  },
  {
      name: 7,
      kilogram: 76,
      calories: 390
  }
]
 

export default () => {
  return (
    <div id='bar-graph-container'>
      <BarChart width={730} height={250} data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#000" />
        <Bar dataKey="calories" fill="red" />
      </BarChart>
    </div>
  )
}