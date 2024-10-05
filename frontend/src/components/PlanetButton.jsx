import React from 'react'
import './PlanetButton.scss'

const PlanetButton = ({ buttonName,onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {buttonName}
    </button>
  )
}

export default PlanetButton
