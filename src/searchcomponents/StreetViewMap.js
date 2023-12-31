import React from 'react';

const StreetViewMap = () => {
    const apiKey = 'AIzaSyB8-Aq4Rat6VyQEpeHFMf3ILM3SGmxlEgE';
    const latitude = 10.29;
    const longitude = 123.88; 
  
    const location = `${latitude},${longitude}`;
  const imageUrl = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${location}&key=${apiKey}`;

  return (
    <div>
      <img src={imageUrl} alt="Street View Map" />
    </div>
  );
};

export default StreetViewMap;
