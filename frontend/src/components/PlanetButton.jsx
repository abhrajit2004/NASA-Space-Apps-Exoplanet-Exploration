import React from 'react'
import './PlanetButton.scss'

const Button = ({ buttonName }) => {
  return (
    <button className='button'>
      {buttonName}
    </button>
  )
}

export default Button
