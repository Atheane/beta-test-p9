import React from 'react'
import Title from '../components/Title'

export default () => {
  const firstName = 'Thomas'
  const message = "Félicitation! Vous avez explosé vos objectifs d'hier 👏"
  return (
    <div>
        <Title firstName={firstName} />
        <p> {message} </p>
    </div>
  )
}