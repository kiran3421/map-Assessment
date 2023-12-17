// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CalculateTollButton from './components/CalculateTollButton';
import RouteVisualization from './components/RouteVisualization';
import TollDetailsDisplay from './components/TollDetailsDisplay';
import Tooltip from './components/Tooltip';
import { calculateToll } from './services/TollGuruService';
import { decodePolyline } from './utils/PolylineDecoder';



function App() {
  const [polyline, setPolyline] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [tollDetails, setTollDetails] = useState([]);
  const [mapCenter, setMapCenter] = useState([0, 0]); // Default center coordinates
  const [mapZoom, setMapZoom] = useState(1); // Default zoom level
  const waypoints = [
    { lat: 37.7749, lng: -122.4194 }, // Example waypoint 1
    { lat: 34.0522, lng: -118.2437 }, // Example waypoint 2
    // Add more waypoints as needed
  ];
  const handleCalculateToll = async () => {
    try {
      const response = await calculateToll(waypoints);
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$4",response)
      const decodedPolyline = decodePolyline(response.route.encoded_polyline);
  
      setPolyline(decodedPolyline);
  
      // Placeholder for extracting markers information from the response
      const extractedMarkers = response.markers.map((marker) => ({
        position: [marker.lat, marker.lng],
        content: marker.content,
      }));
      setMarkers(extractedMarkers);
  
      // Placeholder for extracting toll details information from the response
      const extractedTollDetails = response.tollDetails.map((tollDetail) => ({
        // Extract relevant information from tollDetail
        // For example: cost, additional details, etc.
        // Replace the following placeholders with actual data
        cost: tollDetail.cost,
        additionalDetails: tollDetail.additionalDetails,
      }));
      setTollDetails(extractedTollDetails);
  
    } catch (error) {
      // Handle error
      console.error('Error fetching toll data:', error);
    }
  };
  

  useEffect(() => {
    // Fetch data asynchronously
    const fetchData = async () => {
      try {
       
        setMapCenter([51.505, -0.09]); // Example center coordinates
        setMapZoom(13); // Example zoom level

        
      } catch (error) {
        // Handle error if data fetching fails
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <Header />
      <CalculateTollButton onClick={handleCalculateToll} />
      <RouteVisualization polyline={polyline} markers={markers} center={mapCenter} zoom={mapZoom} />
      <TollDetailsDisplay tollDetails={tollDetails} />
      <Tooltip text="Hover over me to see a tooltip!">
        <div>Hover here</div>
      </Tooltip>
    </div>
  );
}

export default App;
