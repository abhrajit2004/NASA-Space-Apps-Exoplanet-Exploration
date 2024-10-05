import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLine from './NavLine.jsx';
import { RxAvatar } from "react-icons/rx";
import './Navbar.scss';
import { useStore } from '../store/store.js';
import UserModal from './UserModal.jsx';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { token, checkingAuth } = useStore();

  const handleAvatarClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav>
        <div className='navbar-items font-jockey flex flex-row gap-16 justify-end px-4 py-4 text-2xl'>
          <Link className="" to={"/home"}>HOME</Link>
          <Link className="" to={"/exoplanets"}>EXOPLANETS</Link>
          <Link className="" to={"/"}>HELP</Link>
          <Link className="" to={"/"}>ABOUT</Link>
          <Link className="" to={"/quiz"}>QUIZ</Link>
          <Link className="" to={"/"}>ONLINE GAMES</Link>
          <RxAvatar className="size-8 cursor-pointer" onClick={handleAvatarClick} />
        </div>
        <NavLine />
      </nav>
      {showModal && <UserModal token={token} checkingAuth={checkingAuth} />}
    </>
  );
};

export default Navbar;