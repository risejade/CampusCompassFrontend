import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './CCcss/AdminAddEvent.css'; 
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';
import AdminActiveSlider from './AdminEventcomponents/AdminActiveSlider';
import axios from 'axios';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

function AdminAddEvent() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null); 
  const [user, setUser] = useState(null); 
  const [formData, setFormData] = useState({
    eventname: '',
    description:'',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleAddevent = async () => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to update the information?");

    if (!isConfirmed) {
      return; 
    }
      const response = await axios.post('http://127.0.0.1:8080/event/insertEvent', {
  eventname: formData.eventname,
  description: formData.description,
}, {
  headers: {
      'Content-Type': 'application/json',
  },
});

      console.log('Add event:', response.data);

      console.log('Frontend successfully connected to the database');
      
      setSuccessMessage('Information added successfully');

      setFormData({
        eventname: '',
        description: '',
      });

      navigate('/adminaddevent');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

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

  const buttonStyles = {
    marginLeft: '25px',
    color: 'white',
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
      <section>

        {/* Input for Event Title */}
        <h3
          style={{
            color: 'white',
            marginLeft: '25px',
            fontSize: '20px',
            letterSpacing: '2px',
            textShadow: '0 0 5px#4E1E22, 0 0 5px #4E1E22, 0 0 5px #4E1E22',
          }}
        >
          Event Title:
        </h3>
        <input
          type="text"
          id="eventname"
          placeholder="Enter your title here"
          value={formData.eventname}
          onChange={(e) => setFormData({ ...formData, eventname: e.target.value })}
          style={{
            fontSize: '17px',
            color: '#4E1E22',
            marginLeft: '25px',
            width: '350px',
            height: '30px',
            border: 'none',
            backgroundColor: '#F6B460',
            borderRadius: '10px',
            padding: '10px',
          }}
        />
        <br />

        {/* Input for Event Description */}
        <h3
          style={{
            color: 'white',
            fontSize: '20px',
            marginLeft: '25px',
            letterSpacing: '2px',
            textShadow: '0 0 5px#4E1E22, 0 0 5px #4E1E22, 0 0 5px #4E1E22',
          }}
        >
          Event Description:
        </h3>
        <input
          type="text"
          id="description"
          placeholder="Enter your description here"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          style={{
            fontSize: '17px',
            color: '#4E1E22',
            marginLeft: '25px',
            width: '350px',
            height: '30px',
            border: 'none',
            backgroundColor: '#F6B460',
            borderRadius: '10px',
            padding: '10px',
          }}
        />
        <Button variant='outlined' onClick={handleAddevent} style={buttonStyles}>
                    Update
                </Button>
        
      </section>
          <AdminActiveSlider/>
    </div>
    );
  }

export default AdminAddEvent;