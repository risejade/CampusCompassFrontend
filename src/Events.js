import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import './CCcss/BuildingInformation.css'; 
import campusLogo from './CCcss/CCimage/campus.png';
import ActiveSlider from './Eventscomponents/ActiveSlider';
import AdminLogin from './AdminLogin';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

function Events() {
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
    
    console.log(`Clicked on : ${item}`);
    handleDropdownClose();

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

  const handleSearchBldg = () => {
    navigate('/SearchBuilding');
  };

  const handleEvents = () => {
    navigate('/Events');
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleAdminClick = () => {
    console.log('Admin button clicked'); // Check if this log appears in the console
    navigate('/adminlogin');  // Navigate to the '/adminlogin' route
  };

  return (
    <div >
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

      <ActiveSlider/>
    </div>
    
    );
}

export default Events;