import React from 'react'
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts'

const data = [
  { name: 'Score', value: 40 },
  { name: 'Restant', value: 60 }
];
const COLORS = ['red', 'white']


export default () => {
  
    return (
      <PieChart width={250} height={250} onMouseEnter={() => {}}>
        <Pie
          data={data}
          // cx={120}
          // cy={200}
          innerRadius={70}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
}
