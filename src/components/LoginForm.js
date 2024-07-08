import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic, e.g., call backend API
    console.log('Logging in with:', email, password);
    // Redirect to main page after successful login
    // history.push('/home');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
