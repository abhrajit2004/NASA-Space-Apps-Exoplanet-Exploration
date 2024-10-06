import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const QuizSelection = () => {
    const [planetName, setPlanetName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/quiz/${planetName}`);
    };

    return (
        <>
         <div className="video-wrapper absolute">
            <video
            src="/quizbg.mp4"
            autoPlay
            muted
            loop
            ></video>
        </div>
        <div className='flex flex-col items-center justify-center text-white bg-slate-900 my-36 sm:w-[30vw] w-[60vw] p-10 mx-auto border border-white rounded-lg'>
            <Link to="/home" className='p-10'>
                <button className='bg-slate-600 hover:bg-slate-700 text-white text-2xl font-bold py-4 px-6 rounded'>
                    Go to Home
                </button>
            </Link>
            <h1 className='text-3xl mb-6'>Select a Planet for the Quiz</h1> 
            <form onSubmit={handleSubmit} className='w-full max-w-md'>
                <input
                    type="text"
                    value={planetName}
                    onChange={(e) => setPlanetName(e.target.value)}
                    className='w-full border rounded px-4 py-2 mb-4 bg-slate-800 text-white'
                    placeholder="Enter planet name"
                />
                <button 
                    type="submit" 
                    className='w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition-all duration-300'
                >
                    Start Quiz
                </button>
            </form>
        </div>
        </>
    );
};

export default QuizSelection;