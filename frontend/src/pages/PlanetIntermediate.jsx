import React from 'react';
import './PlanetIntermediate.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/PlanetButton.jsx';
import Card from '../components/Card.jsx';
import planet from '../../public/demoPlanet.png';
import video from '../../public/bgSpaceVideo.mp4';

const PlanetIntermediate = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleNextClick = () => {
        navigate(`/planet/${id}`);
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
                    <Card planetName='Oceana' planetInfo1='Aquatica' planetInfo2='Pelagia' />
                </div>
                <div className="right">
                    <div className="planet-container">
                        <img src={planet} alt="Planet" />
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
