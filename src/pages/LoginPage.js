import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LOGIN_USER_ENDPOINT } from '../services/api';
import img1 from '../img1.jpg'; // Importing the image

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_USER_ENDPOINT, { email, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      navigate('/home');
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md backdrop-filter backdrop-blur-lg bg-opacity-70">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Create Account
            </a>
          </p>
          <p>
            <a href="/guest-access" className="text-blue-500 hover:text-blue-700">
              Sign in as Guest
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
