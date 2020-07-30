import React from 'react'
import Title from '../components/Title'

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
          <div id='bar-graph-container'>
            Bar-Graph-Container
          </div>
          <div id='lower-graph-container'>
            <div className='lower-graph' id='lower-graph1'>
              Graph1
            </div>
            <div className='lower-graph'id='lower-graph2'>
              Graph2
            </div>
            <div className='lower-graph' id='lower-graph3'>
              Graph3
            </div>
          </div>
        </div>
        <div className='card-container'>
          <div className='card' id='card1'>Card1</div>
          <div className='card' id='card2'>Card2</div>
          <div className='card' id='card3'>Card3</div>
          <div className='card' id='card4'>Card4</div>
        </div>
      </div>
    </div>
  )
}