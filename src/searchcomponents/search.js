import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 10.294633831685898,
    lng: 123.8819064714978,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD2tA9sn3IcXi_t_8qBbbIyrkh1x0DpT4s"    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
