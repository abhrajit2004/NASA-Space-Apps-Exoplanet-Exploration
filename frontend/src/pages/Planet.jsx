import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Planet = () => {
  const {id} = useParams(); // get the id from the url
  console.log('Planet ID:', id);
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;   // insert custom loading
  }

  if (!planet) {
      return <div>Planet not found</div>;
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      
      <div className="video-wrapper">
        <video src="/homebgvideo.mp4" autoPlay muted loop></video>
      </div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <div className="flex flex-col gap-2 md:w-1/2 p-5">
              <h1 className="text-4xl font-bold mb-4">{planet.pl_name}</h1>
              <p className="">Host Star: {planet.hostname}</p> 
              <p className="">Distance from Earth [in Parsecs]:{planet.sy_dist} </p>
              <p className="">Discovery Date: {planet.disc_year}</p>
              <p className="">Orbital Period [in Days]: {planet.pl_orbper}</p>
              <p className="">Planet Mass: {planet.pl_bmasse} times Earth's or  {planet.pl_bmassj} times Jupiter's</p>
              <p className="">Planet Density [in g/cm<sup>3</sup>]: {planet.pl_dens}</p>
              <p className="">Planet Radius: {planet.pl_radj}</p>
              <p className="">Stellar Mass: {planet.st_mass}</p>
              <p className=''>Age of Host Star: {planet.st_age} billion years</p>
              {/* <a href={`/`} target="_blank" className="mt-4 inline-block text-white px-4 py-2 rounded">Know More</a> */}
          </div>
          <div className="md:w-1/2 p-5">
              {/* <img src={} alt={planet.pl_name} className="w-full h-auto rounded-lg" /> */}
          </div>
      </div>
      
  </div>
  )
}

export default Planet