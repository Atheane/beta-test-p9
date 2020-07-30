import React from 'react'

import Title from '../components/Title'
import CardList from '../components/CardList'
import GraphWrapper from '../components/GraphWrapper'

import BarGraph from '../components/Graphs/BarGraph'
import GraphLine from '../components/Graphs/GraphLine'
import Radar from '../components/Graphs/Radar'
import Score from '../components/Graphs/Score'

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
            <GraphWrapper title='Graph1' id='1'>
              <GraphLine />
            </GraphWrapper>
            <GraphWrapper title='Graph2' id='2'>
              <Radar />
            </GraphWrapper>
            <GraphWrapper title='Graph3' id='3'>
              <Score />
            </GraphWrapper>
          </div>
        </div>
        <CardList />
      </div>
    </div>
  )
}