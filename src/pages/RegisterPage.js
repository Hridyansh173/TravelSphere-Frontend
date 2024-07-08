import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';
import { REGISTER_USER_ENDPOINT } from '../services/api';
import img1 from '../img1.jpg'; // Importing the image

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log('Registering with:', name, email, password);
      const response = await axios.post(REGISTER_USER_ENDPOINT, { name, email, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      navigate('/home');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-white p-8 rounded shadow-2xl w-full max-w-md backdrop-filter backdrop-blur-lg bg-opacity-70">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
        <RegisterForm
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          handleRegister={handleRegister}
        />
        <div className="mt-6 text-center">
          <p>
            Already have an account?{' '}
            <a href="/" className="text-blue-500 hover:text-blue-700">
              Login
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

export default RegisterPage;
