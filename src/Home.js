import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
import './CCcss/Home.css'; // Assuming you have a separate CSS file for styling
import campusLogo from './CCcss/CCimage/campus.png';
import hrLogo from './CCcss/CCimage/hrlogo.png';
import hrComp from './CCcss/CCimage/hrcomp.png';

// IntroductionBox component
function IntroductionBox() {
  return (
    <div className="introduction-box">
      <p>
        Introducing CampusCompass – your all-in-one navigation companion for campus life! Seamlessly navigate through the labyrinth of buildings on your university grounds with ease, thanks to our intuitive and user-friendly app. Locate lecture halls, libraries, and all essential facilities effortlessly, ensuring you're always on time for classes.
      </p>
    </div>
  );
}

function UpdatesBox() {
  return (
    <div className="updates-box">
      <p>
        Stay in the loop with the latest university updates, news, and events right at your fingertips. Whether it's important announcements, campus happenings, or exciting events, you'll never miss a beat. Stay connected to the pulse of your university community with CampusCompass – where navigation meets information in one convenient app. Download now and experience campus life like never before!
      </p>
    </div>
  );
}

function SpinningImage() {
  return (
    <div className="spinning-image">
      <div className="logo-container">
        <img src={hrLogo} alt="HR Logo" className="logo" />
        <img src={hrComp} alt="HR Comp" className="comp-logo" />
      </div>
    </div>
  );
}



// Home component
function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
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
  const handleItemClick = (item) => {
    // Logic for handling dropdown item clicks
    console.log(`Clicked on: ${item}`);
    handleDropdownClose(); // Close the dropdown after clicking an item
    // You can add further logic based on the item clicked
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'rgba(246, 180, 96, 0.8)' }}>
        <Toolbar variant="dense">
          <button className='thecampuslog' onClick={handleLandingPage}>
            <img src={campusLogo} alt="The Campus Logo" />
          </button>
          <div className='appbar'>
          <div className='homebut' onClick={handleHome} style={{ cursor: 'pointer'}}>
            <Typography variant="button">
              Home
            </Typography>
          </div>
          <div className='about' onClick={handleAbout} style={{ cursor: 'pointer'}}>
            <Typography variant="button">
              About Us
            </Typography>
          </div>
          <div className='services' style={{ cursor: 'pointer' }}>
            <Button onClick={handleDropdownClick} style={{ color: 'black' }}>
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

      <div className="home">
        <IntroductionBox />
        <SpinningImage />
        <UpdatesBox />
      </div>
    </div>
  );
}

export default Home;