import React from 'react';
import './PlanetIntermediate.scss';
import Button from '../../component/Button/Button';
import Card from '../../component/Card/Card';
import planet from '../../assets/demoPlanet.png';
import video from '../../assets/bgSpaceVideo.mp4';

export const PlanetIntermediate = () => {
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
                <Card planetName='Oceana' planetInfo1='Aquatica' planetInfo2='Pelagia'/>
            </div>
            <div className="right">
                <div className="planet-container">
                    <img src={planet} alt="Planet" />
                </div>
            </div>
        </div>
        <div className="buttons-div">
            <Button buttonName='Back'/>
            <Button buttonName='Next'/>
        </div>
    </div>
  );
};
