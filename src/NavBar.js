import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import campusLogo from './CCcss/CCimage/campus.png';

function NavBar(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleProfileDropdownClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  
  const handleProfileDropdownClose = () => {
    setProfileAnchorEl(null);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on: ${item}`);
    handleDropdownClose();
    // Further logic based on the item clicked
  };

  const handleRedirect = (path) => {
    navigate(path);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleLogout = () => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to logout the information?");
  
      if (!isConfirmed) {
        return;
      }
      // Navigate to the landing page after logout
      navigate('/landingpage');
    } catch (error) {
      // Handle errors, if any, during the logout process
      console.error("Error occurred during logout:", error);
      // You can display an error message or take appropriate action based on the error
    }
  };


  return (
    <AppBar position="relative" style={{ backgroundColor: 'rgba(246, 180, 96, 0.8)', maxWidth: 'auto', margin: '0 auto' }}>
      <Toolbar variant="dense">
        <button className='thecampuslog' onClick={handleLogout}>
          <img src={campusLogo} alt="The Campus Logo" />
        </button>
        <div className='appbar'>
          <div className='homebut' onClick={() => handleRedirect('/home')} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              Home
            </Typography>
          </div>
          <div className='about' onClick={() => handleRedirect('/about')} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              About Us
            </Typography>
          </div>
          <div className='services' style={{ cursor: 'pointer' }} onClick={stopPropagation}>
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
              <MenuItem onClick={() => handleRedirect('/SearchBuilding')}>Search Building</MenuItem>
              <MenuItem onClick={() => handleRedirect('/buildinginfo')}>Building Information</MenuItem>
              <MenuItem onClick={() => handleRedirect('/buildinginfo')}>Maintenance Report</MenuItem>
              <MenuItem onClick={() => handleRedirect('/Events')}>Events</MenuItem>
              <MenuItem onClick={() => handleRedirect('/adminlogin')}>Admin</MenuItem>
            </Menu>
            <div className="profile-menu">
              {user && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    alt="User Profile"
                    src="../CCcss/CCimage/rise.png"
                    onClick={handleProfileDropdownClick}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                  />
                  <Menu
                    anchorEl={profileAnchorEl}
                    open={Boolean(profileAnchorEl)}
                    onClose={handleProfileDropdownClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    {/* Your dropdown menu items */}
                    <MenuItem onClick={() => handleItemClick('Edit Profile')}>Edit Profile</MenuItem>
                    <MenuItem onClick={() => handleRedirect('/landingpage')}>Logout</MenuItem>
                    {/* Other dropdown items */}
                  </Menu>
                  <div className='logout' onClick={handleLogout}>
                    <Typography variant="button">
                      Log out
                    </Typography>
                  </div>
                  <Typography variant="button" style={{ marginLeft: '10px' }}>
                    {props.user.fname} 
                  </Typography>
                </div>
              )}
            </div>

          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
