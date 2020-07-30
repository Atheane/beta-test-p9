import React from 'react'
import '../scss/Title.scss'

export default ({ firstName }) => {
  return <h1 className='title'> Bonjour <span className='red'>{firstName}</span> </h1>
}