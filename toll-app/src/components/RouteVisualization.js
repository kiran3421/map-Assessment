// // src/components/RouteVisualization.js
import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';

function RouteVisualization({ polyline, markers, center }) {
  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={13} style={{ height: '400px', width: '100%' }}>

     <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?apiKey=RBBdH9mQF388tLhBMGmJJQfLTJtLnGBR"
  attribution='&copy; OpenStreetMap contributors'
/>

      {polyline && <Polyline positions={polyline} color="blue" />}
      {markers &&
        markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.content}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default RouteVisualization;
// RouteVisualization.js
