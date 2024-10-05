import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLine from './NavLine.jsx';
import { RxAvatar } from "react-icons/rx";
import './Navbar.scss';
import { useStore } from '../store/store.js';
import UserModal from './UserModal.jsx';
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  const { user } = useStore();
  const [showModal, setShowModal] = useState(false);
  const { token, checkingAuth } = useStore();
  const [open, setOpen] = useState(false);

  const handleAvatarClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav>
          <div className='navbar-items font-jockey flex flex-row gap-16 justify-end px-4 py-4 text-2xl'>
          <div className="hidden sm:flex flex-row gap-16 justify-end"> 

            <Link className="" to={"/home"}>HOME</Link>
            <Link className="" to={"/exoplanets"}>EXOPLANETS</Link>
            <Link className="" to={"/"}>ABOUT</Link>
            <Link className="" to={"/quiz"}>QUIZ</Link>
            <Link className="" to={"/"}>ONLINE GAMES</Link>
            <Link className="" to={"/favourites"}>FAVOURITES</Link>
            <RxAvatar className="size-8 cursor-pointer" onClick={handleAvatarClick} />
          </div>
          <div className="sm:hidden inline z-50 nav-link hover:scale-110">
          <TiThMenu className={`size-10 text-white cursor-pointer transition-all duration-150 ease-in-out `} onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        </div>
        <div className={`menu ${open ? "flex right-0" : "hidden opacity-0 z-[-10]"}  absolute top-0 bg-black/80 backdrop-blur-md text-white h-screen w-1/2 transition-all duration-500 ease-in-out  flex-col items-center justify-center text-2xl sm:flex gap-14 font-semibold `}>
        <Link className="nav-link" to={"/home"}>HOME</Link>
            <Link className="nav-link" to={"/exoplanets"}>EXOPLANETS</Link>
            <Link className="nav-link" to={"/"}>ABOUT</Link>
            <Link className="nav-link" to={"/quiz"}>QUIZ</Link>
            <Link className="nav-link" to={"/"}>ONLINE GAMES</Link>
            <Link className="nav-link" to={"/favourites"}>FAVOURITES</Link>
            <RxAvatar className="size-8 cursor-pointer" onClick={handleAvatarClick} />
        </div>
        <NavLine />
      </nav>
      {showModal && <UserModal token={token} checkingAuth={checkingAuth} />}
    </>
  );
};

export default Navbar;