import React from 'react';
import { Link } from 'react-router-dom';
import GuestAccess from '../components/GuestAccess';
import img1 from '../img1.jpg'; // Import the image

const GuestAccessPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-lg shadow-lg w-full max-w-md h-auto backdrop-filter backdrop-blur-sm bg-opacity-80">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Explore as Guest</h2>
        <div className="mb-4">
          {/* Guest access component */}
          <GuestAccess />
        </div>
        <p className="text-sm text-center text-white">
          Want to create an account?{' '}
          <Link to="/register" className="text-yellow-300 hover:text-yellow-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GuestAccessPage;
