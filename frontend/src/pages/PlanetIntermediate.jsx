import './PlanetIntermediate.scss';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/PlanetButton.jsx';
import PlanetButton from '../components/PlanetButton.jsx';
import Card from '../components/Card.jsx';
import "../components/Card.scss"
import planet from '../../public/demoPlanet.png';
import video from '../../public/bgSpaceVideo.mp4';

const API_URL = import.meta.env.VITE_BACKEND_URL;

const PlanetIntermediate = () => {
    const navigate = useNavigate();
    const {id} = useParams(); // get the id from the url
    console.log('Planet ID:', id);
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

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
    
  
    if (loading) {
      return <div>Loading...</div>;   // insert custom loading
    }
  
    if (!planet) {
        return <div>Planet not found</div>;
    }

    const handleNextClick = () => {
        navigate(`/planet/${id}`);
    }

    const handleKnowMoreClick = ()=>{
        navigate(`/planetDetails/${planet.pl_name}`);
      }
  
    return (
        <div className='planet-intermediate'>
            <div className="video-background">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="container">
                <div className="left">
                    {/* <Card planetName={planet.pl_name} planetInfo='Aquatica' /> */}
                    <div className='card'>
                        <h1>{planet.pl_name}</h1>
                        <div className="info">
                            <li>Host Star: {planet.hostname}</li>
                            <li>Distance from Earth [in Parsecs]: {planet.sy_dist || <span>Unknown</span> }</li>
                            <li>Discovery Date: {planet.disc_year || <span>Unknown</span> }</li>
                            <li>Orbital Period [in Days]: {planet.pl_orbper || <span>Unknown</span> }</li>
                            <li>Planet Mass: {planet.pl_bmasse || <span>Unknown</span> } times Earth's or  {planet.pl_bmassj} times Jupiter's</li>
                            <li>Planet Density [in g/cm<sup>3</sup>]: {planet.pl_dens || <span>Unknown</span> }</li>
                            <li>Planet Radius: {planet.pl_radj || <span>Unknown</span> }</li>
                            <li>Stellar Mass: {planet.st_mass || <span>Unknown</span> }</li>
                            <li>Age of Host Star: {planet.st_age || <span>Unknown</span> } billion years</li>

                        </div>
                        <PlanetButton buttonName='Know More-->'onClick={handleKnowMoreClick}/>
                    </div>
                </div>
                <div className="right">
                    <div className="planet-container">
                        <img src={selectedPlanet.thumbnailImg.url} alt="Planet" />
                    </div>
                </div>
            </div>
            <div className="buttons-div">
                <Button buttonName='Back' onClick={() => navigate(-1)} />
                <Button buttonName='Next' onClick={handleNextClick} />
            </div>
        </div>
    );
};

export default PlanetIntermediate;
