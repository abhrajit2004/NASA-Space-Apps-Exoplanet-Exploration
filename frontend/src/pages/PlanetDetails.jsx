import React from 'react'
import './PlanetDetails.scss'
import PlanetButton from '../components/PlanetButton.jsx'

function PlanetDetails() {
  return (
    <div className='planetDetails'>
      <div className="description">
        <h1>Oceania: The planet </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt suscipit, dolorem ullam dolor nam officia itaque nulla doloribus illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt suscipit, dolorem ullam dolor nam officia itaque nulla doloribus illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt suscipit, dolorem ullam dolor nam officia itaque nulla doloribus illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt suscipit, dolorem ullam dolor nam officia itaque nulla doloribus illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt suscipit, dolorem ullam dolor nam officia itaque nulla doloribus illo.</p>
      </div>
      <PlanetButton buttonName="Back" />
    </div>
  )
}

export default PlanetDetails
