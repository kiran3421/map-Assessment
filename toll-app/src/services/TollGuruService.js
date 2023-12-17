// // services/TollGuruService.js
// import { getQueryString } from '../utils/apiUtils';  // Adjust the path based on your actual file structure

// const API_KEY = 'RBBdH9mQF388tLhBMGmJJQfLTJtLnGBR';

// export const calculateToll = async (waypoints) => {
//   const apiUrl = `https://api.tollguru.com/v1/calculate?${getQueryString(waypoints)}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': API_KEY,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`API request failed with status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data)
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };



// src/services/TollGuruService.js
// import { getQueryString } from '../utils/ApiUtils';
import { getQueryString } from "../utils/apiUtils";

const API_KEY = 'RBBdH9mQF388tLhBMGmJJQfLTJtLnGBR'; // replace with your actual API key

export const calculateToll = async (waypoints) => {
  const apiUrl = `https://api.tollguru.com/v1/calculate?${getQueryString(waypoints)}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
