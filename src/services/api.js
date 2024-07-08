const API_BASE_URL = 'https://travelsphereback1.vercel.app/api';  // Adjust based on your backend URL

// Trips endpoints
export const GET_ALL_TRIPS_ENDPOINT = `${API_BASE_URL}/trips/getalltrips`;
export const ADD_TRIP_ENDPOINT = `${API_BASE_URL}/trips/addnewtrip`;


// User endpoints
export const REGISTER_USER_ENDPOINT = `${API_BASE_URL}/users/register`;
export const LOGIN_USER_ENDPOINT = `${API_BASE_URL}/users/login`;
export const GUEST_ACCESS_ENDPOINT = `${API_BASE_URL}/users/guest`;
