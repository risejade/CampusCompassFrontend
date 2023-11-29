import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';
import { Paper } from '@mui/material';

function AdminBIEdit() {
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
    <h1 style={{
        textAlign:'center',
        color:'white',
        fontFamily:'fantasy',
        fontSize:'45px',
        letterSpacing:'2px',
        textShadow: '0 0 5px#4E1E22, 0 0 5px #4E1E22, 0 0 5px #4E1E22'
    }}>
        UNIVERSITY BUILDING INFORMATION
    </h1>
    <br></br>
    <h3
    style={{
         color:'white',
         marginLeft:'25px',
         fontSize:'20px',
         letterSpacing:'2px',
         textShadow: '0 0 5px#4E1E22, 0 0 5px #4E1E22, 0 0 5px #4E1E22'
    }}>
        Building Name:
    </h3>
    <input
            type="text"
            placeholder="Enter your building name"
            style={{ 
                fontSize:'17px', 
                color:'#4E1E22' ,
                marginLeft:'25px',
                width: '350px', 
                height: '30px', 
                border: 'none',
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' }}/>
                <br></br>
                <br></br>
                <br></br>
    <h3 style={{
         color:'white',
         fontSize:'20px',
         marginLeft:'25px',
         letterSpacing:'2px',
         textShadow: '0 0 5px#4E1E22, 0 0 5px #4E1E22, 0 0 5px #4E1E22'
    }}>
        Building Information:
    </h3>
    <input
            type="text"
            placeholder="Enter your building information"
            style={{ 
                fontSize:'17px', 
                color:'#4E1E22' ,
                marginLeft:'25px',
                width: '350px', 
                height: '30px', 
                border: 'none',
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' }}/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
         <Button variant='outlined'
         style={{
            marginLeft:'25px',
            color:'white' 
         }}
         >
            Update
            </Button>       
        </Paper>
      </div>

  );
}

export default AdminBIEdit;