import React from 'react'
import { useState, useEffect } from 'react'
import HomeButton from '../components/HomeButton.jsx'
import "./HomePage.css"

const Landing = () => {
  const [LoadingVid, setLoadingVid] = useState(true)


  return (
    <>
        <div className='w-full h-screen overflow-hidden flex flex-col'>
            <div className="video-wrapper">
                <video  src="/homebgvideo.mp4" autoPlay muted loop onLoad={()=>{setLoadingVid(false)}}></video>
            </div>

            <h1 className="title text-3xl text-center font-krona my-32">Welcome to our Web App for NASA SPACE APPS CHALLENGE '24</h1>

            {LoadingVid && <HomeButton className="fade " />}
        </div>
    </>
  )
}

export default Landing
