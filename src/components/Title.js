import React, { useContext } from 'react'
import { StoreContext } from '../Store'

import '../scss/Title.scss'

export default () => {
  const {
    user: {
      firstName
    }
  } = useContext(StoreContext)
  console.log('firstName', firstName)
  return <h1 className='title'> Bonjour <span className='red'>{firstName}</span> </h1>
}