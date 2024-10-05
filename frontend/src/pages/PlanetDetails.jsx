import React from 'react'
import { useEffect, useState } from 'react'
import './PlanetDetails.scss'
import PlanetButton from '../components/PlanetButton.jsx'

function PlanetDetails() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const planetData = localStorage.getItem('selectedPlanet');
    if (planetData) {
        setSelectedPlanet(JSON.parse(planetData));
    }
  }, []);
  
  console.log('Selected Planet:', selectedPlanet);


  return (
    <div className='planetDetails'>
      <div className="description">
        <h1>{selectedPlanet.title}</h1>
        <p>{selectedPlanet.excerpt}</p>
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
