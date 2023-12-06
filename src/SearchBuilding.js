import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CCcss/SearchBuilding.css'; 
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';
import Search from './searchcomponents/search';
import { ChakraProvider, theme } from '@chakra-ui/react'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

function SearchBuilding() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

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
    <ChakraProvider theme={theme}>
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
      <Search/>
      </ChakraProvider>
    </div>
    
  );
}

export default SearchBuilding;