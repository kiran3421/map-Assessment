// TollDetailsDisplay.js
import React from 'react';

function TollDetailsDisplay({ tollDetails }) {
  return (
    <div>
      <h2>Toll Details</h2>
      <ul>
        {tollDetails.map((detail, index) => (
          <li key={index}>
            <strong>Toll Location:</strong> {detail.location}<br />
            <strong>Cost:</strong> ${detail.cost}<br />
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TollDetailsDisplay;
