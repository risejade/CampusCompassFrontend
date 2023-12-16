import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';
import { Paper } from '@mui/material';
import axios from 'axios';

function AdminBIEdit() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      info:'',
    });

    const [updatedBuildingInfo, setUpdatedBuildingInfo] = useState({
      name: '',
      info: '',
    });

    const handleOk = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8080/building/getAllBuilding', {
    name: formData.name,
    info: formData.info,
}, {
    headers: {
        'Content-Type': 'application/json',
    },
});
    const data = await response.json();

    console.log('Building data from backend:', data);

    // Update the formData state with the fetched data
    setFormData({
      name: data.name,
      info: data.info,
    });
  } catch (error) {
    console.error('Error fetching building data:', error);
  }
};
    
    const handleUploadBI = async () => {
      try {
          const isConfirmed = window.confirm("Are you sure you want to update the information?");
    
        if (!isConfirmed) {
          return; 
        }

        const response = await axios.post('http://127.0.0.1:8080/building/insertBuilding', {
    name: formData.name,
    info: formData.info,
}, {
    headers: {
        'Content-Type': 'application/json',
    },
});
  
        console.log('User created:', response.data);
  
        console.log('Frontend successfully connected to the database');

        setFormData({
          name: '',
          info: '',
        });
  
        handleOk();

        navigate('/admin-building-info', {
      state: {
        updatedBuildingInfo: {
          name: formData.name,
          info: formData.info,
        },
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
  }
};
    const gradientBackground = {
        padding: '20px',
        background: 'linear-gradient(45deg, #4E1E2F -10%, #e6b87b 60%, #fb9918 140%)',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        width: '70%', // Adjusted the width to fit the container
        height: 'auto', // Adjusted to fit content
        margin: '0 auto', // Center the container
    };

    const inputStyles = {
        fontSize: '17px',
        color: '#4E1E22',
        marginLeft: '25px',
        width: '300px',
        height: '30px',
        border: 'none',
        backgroundColor: '#F6B460',
        borderRadius: '10px',
        padding: '10px',
    };

    const imagePreviewStyles = {
      maxWidth: '100%',
      maxHeight: '200px',
      top: '350px', // Adjust the distance from the top of the viewport
      left: '900px', // Adjust the distance from the left of the viewport
      zIndex: '3', // Set the stacking order if needed
      position: 'fixed', // Fix the position of the image
      border: '2px solid #4E1E22', // Add a border with a specific color
    };

    const buttonStyles = {
        marginLeft: '25px',
        color: 'white',
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
    <Paper style={{...gradientBackground, borderRadius:'40px'}}>
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
            id="name"
            placeholder="Enter your building name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            id="info"
            placeholder="Enter your building information"
            value={formData.info}
            onChange={(e) => setFormData({ ...formData, info: e.target.value })}
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
                <Button variant='outlined' onClick={handleUploadBI} style={buttonStyles}>
                    Update
                </Button>
                <Button variant='outlined' style={{ ...buttonStyles, marginLeft: '10px' }}>
                    Reset
                </Button>
                <br></br>
                <br></br>
            </Paper>
        </div>
    );
}

export default AdminBIEdit;