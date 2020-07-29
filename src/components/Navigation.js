import React from 'react'
import { Link } from "react-router-dom"

export default () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Link to="#Home">
        Home
      </Link>
      <Link to="#Profil">
        Profil
      </Link>
      <Link to="#Réglage">
        Réglage
      </Link>
      <Link to="#Communauté">
        Communauté
      </Link>
    </div>
  )
};

