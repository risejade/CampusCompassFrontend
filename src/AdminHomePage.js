import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';
import './CCcss/AdminHome.css';
import { Paper } from '@mui/material';

function AdminHome() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const gradientBackground = {
        padding: '20px',
        background: 'linear-gradient(45deg, #4E1E2F -10%, #e6b87b 60%, #fb9918 140%)',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        width: '1440px', // Set the width of the Paper
        height: '565px', // Set the height of the Paper
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

    const handleRedirect = (path) => {
        navigate(path);
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
        <br></br>
    <Paper style={gradientBackground}>
        <Button 
        variant='outlined' 
        style={{ color:'white'}}
        onClick={() => handleRedirect('/admin-building-info')}>
            
            Go to Building Information
        </Button>
        <Button variant='outlined' 
         style={{ color:'white'}}
        >
            Go to Maintenance Report
            </Button>
        <Button variant='outlined' 
         style={{ color:'white'}}
        onClick={() => handleRedirect('/adminaddevent')}>
            Go to Events
            </Button>
        </Paper>
      </div>

  );
}

export default AdminHome;