import React from 'react'

export default ({ title, id, children }) => {
  const firstName = 'Thomas'
  const message = "Félicitation! Vous avez explosé vos objectifs d'hier 👏"
  return (
    <div className='lower-graph' id={`lower-graph${id}`}>
      {children}
    </div>
  )
}