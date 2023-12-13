import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

  const wrapperStyles = {
    paddingTop: '20px', // Add space above the image (adjust the value as needed)
    textAlign: 'center'
  };

  const mapStyles = {
    height: '80vh',
    width: '80%',
    margin: 'auto', // Center the image horizontally
    display: 'block' // Make the image a block element
  };

  const defaultCenter = {
    lat: 10.29,
    lng: 123.88,
  };

  return (
    <div style={wrapperStyles}>
    <LoadScript googleMapsApiKey="AIzaSyD2tA9sn3IcXi_t_8qBbbIyrkh1x0DpT4s"    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      />
    </LoadScript>
    </div>
  );
};

export default MapContainer;
