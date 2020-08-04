import React from 'react'
import '../scss/Card.scss'

export default ({ image, data, kpi }) => {
  return (
    <div className='card'>
      <div>
        <img src={image} width='60px' height='60px' />
      </div>
      <div>
        <div className='data'> {data} </div>
        <div className='kpi'> {kpi} </div>
      </div>
    </div>
  )
}