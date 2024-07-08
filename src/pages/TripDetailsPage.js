import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TripDetailsPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`/api/trips/${id}`);
        setTrip(response.data);
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };

    fetchTrip();
  }, [id]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-center">{trip.title}</h2>
        <div className="mb-4">
          {trip.image ? (
            <img src={`/${trip.image}`} alt={trip.title} className="w-full h-auto rounded-md" />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              Image not available
            </div>
          )}
        </div>
        <p className="text-gray-700 mb-4">{trip.description}</p>
        <p className="text-gray-600 mb-4">{trip.location}</p>
        <p className="text-blue-600 font-semibold text-xl">${trip.price}</p>
      </div>
    </div>
  );
};

export default TripDetailsPage;
