// src/utils/ApiUtils.js
import queryString from 'query-string';

export const getQueryString = (waypoints) => {
  const queryParams = {
    origin: waypoints.origin,
    destination: waypoints.destination,
    // Add more parameters as needed
  };

  return queryString.stringify(queryParams);
};
