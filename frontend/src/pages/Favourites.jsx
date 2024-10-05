import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
const API_URL = import.meta.env.VITE_BACKEND_URL;
import axios from 'axios';
import { useStore } from '../store/store.js';


const Favourites = () => {
    const { user } = useStore();
    const [favourites, setFavourites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16); // Number of items from NASA API
    const [totalPages, setTotalPages] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchFavourites = async () => {
    //         try {
    //             setIsLoading(true);
    //             const response = await axios.get(`${API_URL}/api/favourites/getFav`);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setIsLoading(false);
    //             console.error('Error fetching planets:', error);
    //         }
    //     };
    //     fetchFavourites();
    // }
    // , [currentPage, itemsPerPage]);

    const handleDeleteFavorite = async (id) => {
        try {
            setIsLoading(true);
            const response = await axios.delete(`${API_URL}/api/favourites/deleteFav/${id}`);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error deleting favourite:', error);
        }
    }


    // const handleResize = () => {
    //     setIsMobile(window.innerWidth < 768);
    // }
    // useEffect(() => {
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);



  return (
    <div className='w-full min-h-screen'>
        <div className="video-wrapper">
            <video src="/homebgvideo.mp4" autoPlay muted loop></video>
        </div>
        <Navbar />
        <div className="flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold font-krona">Favourites</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
            </div>
        </div>

    </div>
  )
}

export default Favourites