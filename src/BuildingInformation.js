import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
import './CCcss/Home.css'; // Assuming you have a separate CSS file for styling
import campusLogo from './CCcss/CCimage/campus.png';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

// Home component
function BuildingInformation() {
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

  return (
    <div>
      <AppBar position="relative" style={{ backgroundColor: 'rgba(246, 180, 96, 0.8)', maxWidth: 'auto', margin: '0 auto' }}>
        <Toolbar variant="dense">
          <button className='thecampuslog' onClick={handleLandingPage}>
            <img src={campusLogo} alt="The Campus Logo" />
          </button>
          <div className='appbar'>
          <div className='homebut' onClick={handleHome} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              Home
            </Typography>
          </div>
          <div className='about' onClick={handleAbout} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              About Us
            </Typography>
          </div>
          <div className='services' style={{ cursor: 'pointer' }}>
            <Button onClick={handleDropdownClick} style={{ color: 'white' }}>
              Services
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleDropdownClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={() => handleItemClick('Search Building')}>Search Building</MenuItem>
              <MenuItem onClick={() => handleItemClick('Building Information')}>Building Information</MenuItem>
              <MenuItem onClick={() => handleItemClick('Maintenance Report')}>Maintenance Report</MenuItem>
              <MenuItem onClick={() => handleItemClick('Events')}>Events</MenuItem>
            </Menu>
          </div>
            <div className='logout' onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <Typography variant="button">
                Log out
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BuildingInformation;
