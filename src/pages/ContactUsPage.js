// src/pages/ContactUsPage.js
import React from 'react';
import homeImage from '../homeimg1.jpg';

const ContactUsPage = () => {
  return (
    <div
      className="contact-us-page min-h-screen p-8 flex items-center justify-center"
      style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="bg-white bg-opacity-80 rounded-xl p-10 max-w-3xl mx-auto shadow-lg border border-gray-200">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-800 text-center mb-8">
          We are here to assist you with any questions or concerns. Please reach out to us through any of the following methods:
        </p>
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md mb-6">
            <p className="text-2xl font-bold text-white mb-2">Customer Support</p>
            <p className="text-lg text-white mb-4">
              Our customer support team is available 24/7 to help you with your travel needs.
            </p>
            <p className="text-lg text-white">
              <strong>Email:</strong> support@travelsphere.com
            </p>
            <p className="text-lg text-white">
              <strong>Phone:</strong> +1 (800) 123-4567
            </p>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">Follow Us</p>
          <p className="text-lg text-gray-800 mb-4">
            Stay connected with us through social media for the latest updates and offers:
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <span className="text-blue-600 hover:text-blue-800 text-3xl">
              <i className="fab fa-facebook-square"></i>
            </span>
            <span className="text-blue-400 hover:text-blue-600 text-3xl">
              <i className="fab fa-twitter-square"></i>
            </span>
            <span className="text-pink-600 hover:text-pink-800 text-3xl">
              <i className="fab fa-instagram-square"></i>
            </span>
            <span className="text-red-600 hover:text-red-800 text-3xl">
              <i className="fab fa-youtube-square"></i>
            </span>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-md">
            <p className="text-2xl font-bold text-white mb-2">Office Location</p>
            <p className="text-lg text-white mb-4">
              Visit our office at the following address:
            </p>
            <p className="text-lg text-white">
              123 Travel Sphere Lane, Adventure City, World 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
