import React from 'react'
import Button from '../Button/Button'
import './Card.scss'

const Card = ({planetName, planetInfo1, planetInfo2}) => {
  return (
    <div className='card'>
      <h1>{planetName}</h1>
      <div className="info">
        <li>{planetInfo1}</li>
        <li>{planetInfo2}</li>
      </div>
      <Button buttonName='Know More-->'/>
    </div>
  )
}

export default Card