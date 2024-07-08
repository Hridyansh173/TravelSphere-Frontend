// src/pages/CustomerPage.js

import React, { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import homeImage from '../homeimg1.jpg';
import newYorkImage from '../newyrk1.avif';
import romeImage from '../rome1.avif';
import kyotoImage from '../kyoto1.avif';
import serengetiImage from '../serengeti1.avif';
import baliImage from '../bali1.avif';
import caribbeanImage from '../cari1.avif';
import swissImage from '../swiss1.jpg';

const imageMapping = {
  'New York, USA': newYorkImage,
  'Rome, Italy': romeImage,
  'Kyoto, Japan': kyotoImage,
  'Tanzania': serengetiImage,
  'Bali, Indonesia': baliImage,
  'Caribbean': caribbeanImage,
  'Zermatt, Switzerland': swissImage,
};

const CustomerPage = () => {
  const { id } = useParams(); // Retrieve the trip ID from URL params
  const location = useLocation();
  const { trip } = location.state || {};
  const [isBooked, setIsBooked] = useState(false);

  // If trip is not found or doesn't match the ID, display a message
  if (!trip || trip._id !== id) {
    return (
      <div className="customer-page min-h-screen p-8 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800">Trip not found!</h2>
        <Link to="/booking" className="mt-4 text-blue-500 hover:underline">
          Back to Explore
        </Link>
      </div>
    );
  }

  // Select background image based on trip location
  const imageSrc = imageMapping[trip.location] || swissImage;

  // Handle booking button click
  const handleBookNow = () => {
    setIsBooked(true); // Set booked state to true
  };

  return (
    <div
      className="customer-page min-h-screen p-8"
      style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <img
          src={imageSrc} // Display the specific trip image
          alt={trip.title}
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">{trip.title}</h2>
          <p className="text-xl text-gray-600 mb-6">{trip.description}</p>
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-500">{trip.location}</p>
            <p className="text-2xl font-semibold text-gray-800">${trip.price}</p>
          </div>
          {trip.details && (
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included:</h3>
              <ul className="text-gray-700">
                {trip.details.map((detail, index) => (
                  <li key={index} className="mb-2">
                    <span className="mr-2">&#8226;</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Trip Highlights:</h3>
            <ul className="text-gray-700 list-disc pl-6">
              <li>Luxury accommodations with breathtaking views</li>
              <li>Guided tours of iconic landmarks and hidden gems</li>
              <li>Exclusive dining experiences at renowned restaurants</li>
              <li>Access to cultural performances and local festivals</li>
              <li>Exciting adventure activities and scenic hikes</li>
              <li>Customized itineraries tailored to your preferences</li>
              <li>Transportation in luxury vehicles with professional drivers</li>
              <li>24/7 concierge service for all your needs</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary:</h3>
            <div className="text-gray-700">
              <p className="mb-2"><span className="font-semibold">Day 1:</span> Arrival and check-in at luxurious accommodations</p>
              <p className="mb-2"><span className="font-semibold">Day 2:</span> Morning tour of historical sites and afternoon spa relaxation</p>
              <p className="mb-2"><span className="font-semibold">Day 3:</span> Culinary tour of local markets and cooking class</p>
              <p className="mb-2"><span className="font-semibold">Day 4:</span> Adventure day with zip-lining and wildlife safari</p>
              <p className="mb-2"><span className="font-semibold">Day 5:</span> Leisure day for shopping and exploring art galleries</p>
              <p className="mb-2"><span className="font-semibold">Day 6:</span> Cultural tour with traditional dance performances</p>
              <p className="mb-2"><span className="font-semibold">Day 7:</span> Departure and transfer to the airport</p>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Start Date:</label>
            <input type="date" className="w-full p-2 border rounded-lg mb-4" />
            <label className="block text-gray-700 mb-2">End Date:</label>
            <input type="date" className="w-full p-2 border rounded-lg mb-4" />
          </div>
          <button
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold"
            onClick={handleBookNow}
          >
            Book Now
          </button>
          {isBooked && (
            <div className="mt-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800">
              Trip booked successfully!
            </div>
          )}
          <Link to="/booking" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
