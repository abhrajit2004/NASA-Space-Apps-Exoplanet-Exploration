import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton.jsx';
import './Landing.css'; // Make sure you include the CSS file for styling

const Landing = () => {
  const [LoadingVid, setLoadingVid] = useState(true);
  const [displayText, setDisplayText] = useState(''); // State to hold the text that appears

  // The complete text to be displayed
  const fullText = "Welcome to our Web App for NASA SPACE APPS CHALLENGE '24";

  // Typewriter effect function
  useEffect(() => {
    let index = 0;
    let prev = '';
    const intervalId = setInterval(() => {
      // Only add characters if the index is within bounds
      if (index < fullText.length) {
        prev = prev + fullText[index];
        setDisplayText(prev);
        index += 1;
      } else {
        clearInterval(intervalId); // Clear interval when done
      }
    }, 100); // Adjust typing speed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='landing-container w-full h-screen overflow-hidden flex flex-col items-center justify-center'>
      {/* Background Video */}
      <div className="video-wrapper">
        <video
          src="/homebgvideo.mp4"
          autoPlay
          muted
          loop
          onLoad={() => setLoadingVid(false)}
        ></video>
      </div>

      {/* Typewriter Text Effect */}
      <h1 className="title text-4xl text-center font-krona typewriter-text">
        {displayText}
      </h1>

      {/* GIF Container */}
      <div className="gif-container">
        <img src="./astronaut-tumble-astronaut.gif" alt="Description of GIF" />
      </div>

      {/* Home Button */}
      {LoadingVid && <HomeButton className="fade stylish-button" />}
    </div>
  );
};

export default Landing;
