import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PlanetDetails.scss'
import PlanetButton from '../components/PlanetButton.jsx'
import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_URL;

const PlanetDetails = () =>  {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedPlanet, setSelectedPlanet] = useState({});
  const {id} = useParams(); // get the id from the url
  console.log('Planet ID:', id);

  useEffect(() => {
    const fetchPlanet = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/planets/${id}`);
            setPlanet(response.data);
            console.log('Planet:', response.data);
            setLoading(false);
          } catch (error) {
              console.error('Error fetching planet:', error);
              setLoading(false);
          }
      };
      
      fetchPlanet();
  }, [id]);

  useEffect(() => {
    const planetData = localStorage.getItem('selectedPlanet');
    if (planetData) {
        setSelectedPlanet(JSON.parse(planetData));
    }
  }, []);

  console.log('Selected Planet:', selectedPlanet);

  const handleBack = () => {
    window.history.back();
  }

  const handleTextToSpeech = () => {
    const paragraphs = document.querySelectorAll('.description p'); // Select all p tags within the description
    let textContent = '';
    paragraphs.forEach((p) => {
      textContent += p.textContent + ' '; // Accumulate the text content from each p tag
    });

    // Use SpeechSynthesis to speak the accumulated text
    const speech = new SpeechSynthesisUtterance(textContent);
    speech.lang = 'en-US'; // Set the language
    window.speechSynthesis.speak(speech); // Speak the text
  };

  return (
    <div className='planetDetails'>
      <div className="description">
        <h1>{selectedPlanet.title}</h1>
        <p>{selectedPlanet.excerpt}</p>
        <p>Host Star: {planet.hostname}</p>
        <p>Distance from Earth [in Parsecs]: {planet.sy_dist || <span>Unknown</span> }</p>
        <p>Discovery Date: {planet.disc_year || <span>Unknown</span> }</p>
        <p>Orbital Period [in Days]: {planet.pl_orbper || <span>Unknown</span> }</p>
        <p>Planet Mass: {planet.pl_bmasse || <span>Unknown</span> } times Earth's or  {planet.pl_bmassj} times Jupiter's</p>
        <p>Planet Density [in g/cm<sup>3</sup>]: {planet.pl_dens || <span>Unknown</span> }</p>
        <p>Planet Radius: {planet.pl_radj || <span>Unknown</span> }</p>
        <p>Stellar Mass: {planet.st_mass || <span>Unknown</span> }</p>
        <p>Age of Host Star: {planet.st_age || <span>Unknown</span> } billion years</p>

      </div>
      <PlanetButton buttonName="Back" onClick={handleBack} />
      <PlanetButton buttonName="Read Aloud" onClick={handleTextToSpeech} />
    </div>
  )
}

export default PlanetDetails
