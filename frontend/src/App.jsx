import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
// import Planet from './pages/Planet.jsx'
import Planets from './pages/Planets.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import QuizSelection from './pages/QuizSelection.jsx'
import Quiz from './pages/Quiz.jsx'
import Landing from './pages/Landing.jsx'
import PlanetIntermediate from './pages/PlanetIntermediate.jsx'
import PlanetDetails from './pages/PlanetDetails.jsx'
import Favourites from './pages/Favourites.jsx'
import { useStore } from './store/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  
  
  return (
    <>
    < ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
        />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/planet/:id" element={<Planet />} /> */}
        <Route path="/exoplanets" element={<Planets />} />
        <Route path='/planetintermediate/:id' element={<PlanetIntermediate/>}/>
        <Route path="/quiz" element={<QuizSelection />} />
        <Route path="/quiz/:planetName" element={<Quiz />} />
        <Route path='/planetDetails/:id' element={<PlanetDetails/>  }/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </>
  )
}

export default App