import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <ul className="flex justify-around items-center space-x-4">
        <li><Link className="text-white hover:text-yellow-500" to="/home">Home</Link></li>
        <li><Link className="text-white hover:text-yellow-500" to="/booking">Explore</Link></li>
        <li><Link className="text-white hover:text-yellow-500" to="/contact">Contact Us</Link></li>
        <li><Link className="text-white hover:text-yellow-500" to="/travel-blogs">Travel Blogs</Link></li>
      </ul>
      <button
        className="text-white hover:text-yellow-500"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
