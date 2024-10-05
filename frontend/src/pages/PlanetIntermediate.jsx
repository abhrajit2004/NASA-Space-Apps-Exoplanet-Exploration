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
    const [selectedPlanet, setSelectedPlanet] = useState({});

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
        // navigate(`/planet/${id}`);
        navigate(`/exoplanets`);
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
