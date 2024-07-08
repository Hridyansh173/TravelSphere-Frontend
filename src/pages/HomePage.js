import React from 'react';
import homeImage from '../homeimg1.jpg';

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${homeImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">Welcome to TravelSphere</h2>
        <p className="text-gray-700 text-center mb-8">
          Explore our features and book your next holiday trip.
        </p>
        <div className="flex justify-center">
          <a
            href="/booking"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-800 transition duration-300"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
