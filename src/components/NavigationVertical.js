import React from 'react'
import firstIcon from '../assets/firstIcon.svg'
import secondIcon from '../assets/secondIcon.svg'
import thirdIcon from '../assets/thirdIcon.svg'
import fourthIcon from '../assets/fourthIcon.svg'
import '../scss/Navigation.scss'

export default () => (
  <div className='navbar-vertical'>
    <div className='menuv-container'>
      <a href="#1">
        <img
          src={firstIcon}
          alt='firstIcon'
          width='64px'
          height='64px'
        />
      </a>
      <a href="#2">
        <img
          src={secondIcon}
          alt='secondIcon'
          width='64px'
          height='64px'
        />
      </a>
      <a href="#3">
        <img
          src={thirdIcon}
          alt='thirdIcon'
          width='64px'
          height='64px'
        />
      </a>
      <a href="#4">
        <img
          src={fourthIcon}
          alt='fourthIcon'
          width='64px'
          height='64px'
        />
      </a>
    </div>
  </div>
)