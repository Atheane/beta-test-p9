import React, { useContext } from 'react'

import Title from './Title'
import CardList from './CardList'
import GraphWrapper from './GraphWrapper'

import BarGraph from './Graphs/BarGraph'
import GraphLine from './Graphs/GraphLine'
import Radar from './Graphs/Radar'
import Score from './Graphs/Score'

import '../scss/Content.scss'
import { StoreContext } from '../Store'

export default () => {

  const store = useContext(StoreContext)

  const message = "Félicitation! Vous avez explosé vos objectifs d'hier 👏"

  return (
    <div id='page-container'>
      <div className='header-content'>
          <Title />
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