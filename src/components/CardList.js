import React from 'react'
import Calories from '../assets/calories-icon.png'
import Protein from '../assets/protein-icon.png'
import Fat from '../assets/fat-icon.png'
import Carbs from '../assets/carbs-icon.png'
import Card from '../components/Card'

export default () => {
  return (
    <div className='card-container'>
      <Card image={Calories} data={1930} kpi={"Calories"} />
      <Card image={Protein} data={155} kpi={"Proteines"} />
      <Card image={Carbs} data={290} kpi={"Glucides"} />
      <Card image={Fat} data={50} kpi={"Lipides"} />
    </div>
  )
}
