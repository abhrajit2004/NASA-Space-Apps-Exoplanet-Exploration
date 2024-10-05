import React from 'react'
import './Button.scss'

const Button = ({ buttonName }) => {
  return (
    <button className='button'>
      {buttonName}
    </button>
  )
}

export default Button
