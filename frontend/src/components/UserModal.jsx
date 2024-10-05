import React, { useState } from 'react';
import { useStore } from '../store/store.js';


const UserModal = ({ token, checkingAuth }) => {
  const { user } = useStore();
  const {auth, logout} = useStore();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    auth(username);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="user-modal bg-slate-700 shadow-lg rounded p-4 absolute right-4 top-16">
      {checkingAuth ? (
        <div>Loading...</div>
      ) : token ? (
        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="input text-black input-bordered w-full mb-2"
          />
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
      )}
    </div>
  );
};

export default UserModal;