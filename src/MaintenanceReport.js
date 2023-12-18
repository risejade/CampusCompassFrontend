import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Input,
} from '@mui/material';
import './CCcss/Maintenance.css';
import campusLogo from './CCcss/CCimage/campus.png';
import hrLogo from './CCcss/CCimage/hrlogo.png';
import MaintenanceLogo from './CCcss/CCimage/MaintenanceLogo.png';
import NavBar from './NavBar';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

function Maintenance() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [maintenanceDetails, setMaintenanceDetails] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const buildings = ['ACADEMIC', 'ALLIED', 'ELEMENTARY', 'NGE', 'GLE', 'SAL', 'RTL', 'G-PHYSLAB', 'PE AREA', 'GYMNASIUM'];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    console.log('File uploaded:', selectedFile);
  };

  const handleSubmit = () => {
    const isConfirmed = window.confirm('Are you sure you want to submit?');
    if (isConfirmed) {
      console.log('Submitting maintenance report');
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }
  };

  const handleCancel = () => {
    const isConfirmed = window.confirm('Are you sure you want to reset all fields?');
    if (isConfirmed) {
      setSelectedBuilding('');
      setMaintenanceDetails('');
      setSelectedFile(null);
    }
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on: ${item}`);
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
        handleEventso={handleEvents}
      />

      <div className="report-box">
        <h1>MAINTENANCE REPORT</h1>
        <p className="bldg">Choose a building/facility</p>
        <FormControl variant="outlined" className="dropdown">
          <InputLabel id="building-label" style={{ fontFamily: 'Poppins Medium', color: '#fff', letterSpacing: '3px', fontSize: '20px' }}>Building</InputLabel>
          <Select
            className="building-select"
            labelId="building-label"
            id="building-select"
            value={selectedBuilding}
            onChange={(e) => setSelectedBuilding(e.target.value)}
            label="Building"
            style={{
              color: '#fff',
              fontFamily: 'Poppins Medium',
              letterSpacing: '2px',
              fontSize: '20px',
            }}
          >
            {buildings.map((building, index) => (
              <MenuItem key={index} value={building}>
                {building}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p className="bldg">Details</p>
        <div className="additional-box">
          <p>We value your input in maintaining our campus facilities in top condition. If you encounter any equipment, furniture, or infrastructure that requires repair or maintenance, please report it to us promptly. Your prompt attention will help us address these issues efficiently and ensure the well-being of our community.</p>
        </div>

        <div className="maintenance-logo">
          <img src={MaintenanceLogo} alt="Maintenance Logo" />
        </div>

        <TextField
          className='details'
          multiline
          rows={4}
          variant="outlined"
          value={maintenanceDetails}
          onChange={(e) => setMaintenanceDetails(e.target.value)}
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Please include as much info as possible..."}
          placeholder="Please include as much info as possible..."
        />

        <p className="option">*Optional</p>

        <FormControl className='upload'>
          <Input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            style={{ color: '#fff' }}
          />
        </FormControl>

        <Button className='upload-button' variant="contained" color="primary" onClick={handleUpload} style={{ fontFamily: 'Poppins Medium', marginTop: '.1px', marginLeft:'1px', backgroundColor: '#62272C'}}>
          Upload
        </Button>

        <Button className='submit' variant="contained" onClick={handleSubmit} style={{ fontFamily: 'Poppins Medium', marginTop: '.1px', marginLeft:'1px', backgroundColor: '#62272C'}}>
          Submit
        </Button>

        <Button className='cancel' onClick={handleCancel} style={{ fontFamily: 'Poppins Medium', marginTop: '.1px', marginLeft:'1px'}}>
          Reset
        </Button>

        {/* Success modal */}
        {submitSuccess && (
          <div className="success-modal">
            <p>You have submitted your maintenance report successfully</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Maintenance;
