import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CCcss/BuildingInformation.css'; // Assuming you have a separate CSS file for styling
import campusLogo from './CCcss/CCimage/campus.png';
import 'leaflet/dist/leaflet.css';
import NavBar from './NavBar';


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

  const parisCoordinates = { lat: 10.3031, lng: 123.8974 };

const MapComponent = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [destinationCoordinates, setDestinationCoordinates] = useState(null);

    const defaultLat = 10.3031; 
    const defaultLng = 123.8974;

    useEffect(() => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting user location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
    }, []);

    const handleDestinationChange = async (event) => {
      const destinationName = event.target.value;
      setDestination(destinationName);

      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${destinationName}&limit=1`
        );

        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setDestinationCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
        } else {
          console.error('Destination not found');
          setDestinationCoordinates(null);
        }
      } catch (error) {
        console.error('Error fetching destination coordinates:', error.message);
        setDestinationCoordinates(null);
      }
    };

    return (
      <MapContainer
        center={parisCoordinates}
        zoom={15}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
        {destinationCoordinates && (
          <Marker position={destinationCoordinates}>
            <Popup>{destination}</Popup>
          </Marker>
        )}
      </MapContainer>
    );
  };

function SearchBuilding() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleDestinationChange = async (event) => {
    const destinationName = event.target.value;
    setDestination(destinationName);

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${destinationName}&limit=1`
      );

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setDestinationCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
      } else {
        console.error('Destination not found');
        setDestinationCoordinates(null);
      }
    } catch (error) {
      console.error('Error fetching destination coordinates:', error.message);
      setDestinationCoordinates(null);
    }
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    // Logic for handling dropdown item clicks
    console.log(`Clicked on: ${item}`);
    handleDropdownClose(); // Close the dropdown after clicking an item
    // You can add further logic based on the item clicked
  };

  const handleLogin = () => {
    setUser();
    navigate('/app');
  };

  const handleHome = () => {
    setUser();
    navigate('/home');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const handleLandingPage = () => {
    navigate('/landingpage');
  };

  const handleLogout = () => {
    navigate('/landingpage');
  };

  const handleBuildingInfo = () => {
    navigate('/buildinginfo');
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleSearchBldg = () => {
    navigate('/SearchBuilding');
  };

  const handleEvents = () => {
    navigate('/Events');
  };
  


  return (
    <div>
       <NavBar
        handleHome={handleHome}
        handleAbout={handleAbout}
        handleDropdownClick={handleDropdownClick}
        handleDropdownClose={handleDropdownClose}
        handleSearchBldg={handleSearchBldg}
        handleBuildingInfo={handleBuildingInfo}
        handleItemClick={handleItemClick}
        handleLandingPage={handleLandingPage}
        user={user}
        handleLogout={handleLogout}
        stopPropagation={stopPropagation}
        campusLogo={campusLogo}
      />   
             <div>
        <input
          type="text"
          placeholder="Enter your destination"
          onChange={handleDestinationChange}
        />
        <MapComponent
          userLocation={userLocation}
          destination={destination}
          destinationCoordinates={destinationCoordinates}
          handleDestinationChange={handleDestinationChange}
        />
      </div>
    </div>
  );
}

export default SearchBuilding;