import React from 'react'
import Title from '../components/Title'
import BarGraph from '../components/BarGraph'
import Graph from '../components/Graph'
import CardList from '../components/CardList'
import '../scss/Content.scss'

export default () => {
  const firstName = 'Thomas'
  const message = "Félicitation! Vous avez explosé vos objectifs d'hier 👏"
  return (
    <div id='page-container'>
      <div className='header-content'>
          <Title firstName={firstName} />
          <p> {message} </p>
      </div>
      <div className='content-container'>
        <div className='graph-container'>
          <BarGraph />
          <div id='lower-graph-container'>
            <Graph title='Graph1' id='1'/>
            <Graph title='Graph2' id='2'/>
            <Graph title='Graph3' id='3'/>
          </div>
        </div>
        <CardList />
      </div>
    </div>
  )
}