import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import Pagination from '../components/Pagination.jsx';

// const API_URL = import.meta.env.VITE_BACKEND_URL;

const Favourites = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16); // Number of items from NASA API
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [favourites, setFavourites] = useState(() => {
        const savedFavourites = localStorage.getItem('favourite-planets');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
      });
    const [totalPages, setTotalPages] = useState(
        Math.ceil(favourites.length / itemsPerPage)
    );
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


    const handleDeleteFavorite = async (planet) => {
        try {
            setIsLoading(true);
            const title = planet.title;
            const updatedFavourites = favourites.filter(fav => fav.title !== title);
            setFavourites(updatedFavourites);
            localStorage.setItem('favourite-planets', JSON.stringify(updatedFavourites));
            toast.success('Planet removed from favourites!');
            setIsLoading(false);
            setTotalPages(Math.ceil(updatedFavourites.length / itemsPerPage));
        }
        catch (error) {
            console.error('Error deleting planet:', error);
            toast.error('Error deleting planet!');
            setIsLoading(false);
        }
    };


    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    const handleItemsPerPageChange = (event) => {
        setItemsPerPage((event.target.value));
        setCurrentPage(1); // Reset to first page when itemsPerPage changes
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page when search query changes
        // fetchPlanets();
        
    };

    const handlePlanetClick = (planet) => {
        localStorage.setItem('selectedPlanet', JSON.stringify(planet));
    };

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };


  return (
    <>
    <div className='text-white w-full min-h-screen pb-5'>
        <div className="video-wrapper">
            <video src="/homebgvideo.mp4" autoPlay muted loop></video>
        </div>
        <Navbar />
            {/* Dropdown to change items per page */}
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center my-4 font-semibold">
                <div className='flex flex-col sm:flex-row'>
                    <label className="mr-2 text-lg">Showing</label>
                    <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="border rounded px-2 py-1 bg-slate-800">
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={32}>32</option>
                        <option value={64}>64</option>
                        <option value={128}>128</option>
                    </select>
                    <span className="ml-2 text-lg">Exoplanets per page!</span>
                </div>
                <div>
                    <input type="text" placeholder="Search Exoplanets" className="border rounded px-2 py-1 bg-slate-800 ml-4" value={searchQuery} onChange={handleSearchChange} />
                </div>
            </div>
            
            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                isMobile={isMobile}
                handlePageChange={handlePageChange}
                isLoading={isLoading}
                searchQuery={searchQuery}
                itemsPerPage={itemsPerPage}
            />

            {isLoading? <div className="text-center text-2xl mt-4">Loading...</div> :
            <div className="flex flex-wrap justify-center mt-4">
                
                {favourites.map((planet, index) => (
                    <Link to={`/planetintermediate/${planet.title}`} key={index}
                    onClick={() => handlePlanetClick(planet)}
                    className="bg-opacity-20 rounded-lg m-2 p-8 group text-center shadow-lg hover:bg-slate-800/80 transition-all duration-150 hover:scale-105 active:scale-95">
                        <div className="h-36 bg-white bg-opacity-20 rounded-lg mb-2">
                            {planet.thumbnailImg ? (
                                <img src={planet.thumbnailImg} alt={planet.title} className="h-full w-full object-cover rounded-lg" />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-gray-500">No Image</div>
                            )}
                        </div>
                        <h2 className='text-3xl font-semibold'>{planet.title}</h2>
                        <FaTrashAlt id="delete" className='absolute  size-10 top-2 right-2 text-gray-500 hover:text-red-500 
                        hover:scale-110 opacity-0 
                        transition-all duration-100 group-hover:opacity-100 ' onClick={(e) =>{e.preventDefault();
                        handleDeleteFavorite(planet)}} />
                        <Tooltip anchorSelect="#delete" place="top" content='Delete from Favourites'/>
                    </Link>

                ))} 
                
                {favourites.length === 0 && <div className="text-center text-3xl">No planets favourited!</div>}
            </div>}
            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                isMobile={isMobile}
                handlePageChange={handlePageChange}
                isLoading={isLoading}
                searchQuery={searchQuery}
                itemsPerPage={itemsPerPage}
            />

        </div>
    </>
  )
}

export default Favourites