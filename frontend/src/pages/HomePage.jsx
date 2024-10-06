import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import HomeButton from '../components/HomeButton.jsx'
import "./HomePage.css"


const HomePage = () => {
  const [LoadingVid, setLoadingVid] = useState(true)
  
  return (
    <>
    <div className="w-full min-h-screen mx-auto  flex flex-col">

    <Navbar />
      
      <div className="video-wrapper">
        <video  src="/homebgvideo.mp4" autoPlay muted loop onLoad={()=>{setLoadingVid(false)}}></video>
      </div>
        <h1 className="title text-4xl  text-center font-krona mt-4">EduExo - Learn Your Exoplanets</h1>
       <div className="desc p-4 mx-2 sm:mx-20 text-xl font-averia">
        Embark on a thrilling journey to revolutionize exoplanet education! The discovery of exoplanets has redefined our understanding of planetary systems, expanding what we know about our place in the universe. From scorching gas giants to potentially habitable rocky worlds, these distant worlds offer a glimpse into the remarkable diversity of planetary configurations. Traditional educational materials about this topic may not be accessible to everyone, particularly those from underserved communities or with limited access to resources. Your challenge is to develop engaging and accessible learning materials that leverage creativity to enlighten students about the wonders of exoplanets.
       </div>

      <div className='flex flex-col sm:flex-row justify-between sm:justify-around mt-16 gap-20'>
        {LoadingVid && <HomeButton className="fade" goto={"Take a Quiz"} />}
        {LoadingVid && <HomeButton className="fade" goto={"Explore Planets"} />}
        <div className='mb-2'></div>
      </div>

    </div>

    </>
  )
}  

export default HomePage 