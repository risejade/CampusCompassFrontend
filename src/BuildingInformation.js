import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import './CCcss/BuildingInformation.css'; 
import campusLogo from './CCcss/CCimage/campus.png';
import GLE from './CCcss/CCimage/GLE.jpg';
import SAL from './CCcss/CCimage/SAL.jpg';
import RTL from './CCcss/CCimage/RTL.jpg';
import GYM from './CCcss/CCimage/GYM.jpg';
import ACADS from './CCcss/CCimage/ACADS.jpg';
import NGE from './CCcss/CCimage/NGE.png';
import PE from './CCcss/CCimage/PE.jpg';
import ELEM from './CCcss/CCimage/ELEM.jpg';
import GYMloc from './CCcss/CCimage/GYMloc.png'
import GLEloc  from './CCcss/CCimage/GLEloc.png';
import SALloc  from './CCcss/CCimage/SALloc.png';
import RTLloc  from './CCcss/CCimage/RTLloc.png';
import ACADloc  from './CCcss/CCimage/ACADloc.png';
import NGEloc  from './CCcss/CCimage/NGEloc.png';
import PEloc  from './CCcss/CCimage/PEloc.png';
import ELEMloc  from './CCcss/CCimage/ELEMloc.png';
import ALLIEDloc from './CCcss/CCimage/ALLIEDloc.png';
import NavBar from './NavBar';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

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
  const handleAdmin = () => {
    navigate('/adminlogin');
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
            handleEventso={handleEvents}
          /> 
    </div>
    
    );
}

export default BuildingInformation;