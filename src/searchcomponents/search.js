import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

  const wrapperStyles = {
    paddingTop: '20px', 
    textAlign: 'center'
  };

  const mapStyles = {
    height: '80vh',
    width: '80%',
    margin: 'auto', 
    display: 'block', 
    borderRadius: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
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
