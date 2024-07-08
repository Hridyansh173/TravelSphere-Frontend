// src/pages/GuestAccessPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GUEST_ACCESS_ENDPOINT } from '../services/api';

const GuestAccessPage = () => {
  const navigate = useNavigate();

  const handleGuestAccess = async () => {
    try {
      const response = await axios.post(GUEST_ACCESS_ENDPOINT);
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      navigate('/home');
    } catch (error) {
      console.error('Guest access failed', error);
      alert('Guest access failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Guest Access</h2>
        <p className="mb-6">
          Explore our website as a guest. You can view places and explore prices.
        </p>
        <button
          onClick={handleGuestAccess}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default GuestAccessPage;
