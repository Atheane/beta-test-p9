import React from 'react'
import { Link } from "react-router-dom"
import '../scss/Navigation.scss'

export default () => {
  return (
    <div className='navbar-horizontal'>
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

