import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import campusLogo from './CCcss/CCimage/campus.png';
import axios from 'axios';

function NavBar(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);


  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        // Assuming you have the user's username stored in localStorage after successful login
        const loggedInUsername = localStorage.getItem('loggedInUsername');
        if (loggedInUsername) {
          const response = await axios.get(`http://127.0.0.1:8080/usercampus/getAllUsercampus?username=${loggedInUsername}`);
          const userData = response.data;
          // Assuming the response structure returns an array of users and you want the first user
          if (userData && userData.length > 0) {
            setUser(userData[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle errors accordingly
      }
    };

    fetchUserData();
  }, []);


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

  const handleRedirect = (path) => {
    navigate(path);
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
              <MenuItem onClick={() => handleRedirect('/SearchBuilding')}>Search Building</MenuItem>
              <MenuItem onClick={() => handleRedirect('/buildinginfo')}>Building Information</MenuItem>
              <MenuItem onClick={() => handleRedirect('/maintenance')}>Maintenance Report</MenuItem>
              <MenuItem onClick={() => handleRedirect('/Events')}>Events</MenuItem>
              <MenuItem onClick={() => handleRedirect('/adminlogin')}>Admin</MenuItem>
            </Menu>
          </div>
          <div className='profile' style={{ cursor: 'pointer' }}>
            <Button onClick={handleProfileDropdownClick} style={{ color: 'white' }}>
              Profile
            </Button>
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
             {user && (
                <MenuItem disabled>
                  {user.fname} {/* Display logged-in user's first name */}
                </MenuItem>
              )}
              <MenuItem onClick={() => handleRedirect('/user-profile')}>Profile Page</MenuItem>
              <MenuItem onClick={() => handleRedirect('/update-password')}>Update Password</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
          <div className="profile-menu">
            {props.user && (
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
                  <MenuItem onClick={() => handleRedirect('/user-profile')}>Profile Page</MenuItem>
                  <MenuItem onClick={() => handleRedirect('/update-password')}>Update Password</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
                <Typography variant="button" style={{ marginLeft: '10px' }}>
                  {props.user.fname}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
