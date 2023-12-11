import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/Signup.css';
import campusLogo from './CCcss/CCimage/campus.png';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fname: '',
    Lname:'',
    username: '',
    email: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    document.body.classList.add('Signup-page');

    return () => {
      document.body.classList.remove('Signup-page');
    };
  }, []);

  const handleLogin = () => {
    setUser();
    navigate('/login'); 
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
  const handleForgotPass = () => {
    navigate('/forgotpass')
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/usercampus/insertUsercampus', {
        fname: formData.fname,
        lname: formData.lname,
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      // Assuming the signup was successful
      console.log('User created:', response.data);

      // Show success message
      setSuccessMessage('Account successfully created');

      // Clear form data after successful submission if needed
      setFormData({
        fname: '',
        username: '',
        email: '',
        password: ''
      });

      // Redirect to login page or any other desired page after successful signup
      navigate('/login');
    } catch (error) {
      // Handle error responses
      console.error('Error creating user:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'rgba(246, 180, 96, 0.8)' }}>
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
        <div className='services' onClick={handleContact} style={{ cursor: 'pointer' }}>
          <Typography variant="button">
           Services
          </Typography>
        </div>
        </div>
        </Toolbar>
      </AppBar>


      <div className='SignupText' >
        <h2 className='SignupTextFormat' style={{ fontSize:"30px"}}>
          Sign Up
        </h2>
      </div>


      <div className='Signupatts'>
        <h3 style={{ fontSize:"15px"}}>
          First Name
          </h3>
        <div className='fname'>
          <input
            type="text"
            id="fname"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formData.fname}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '350px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
            </div>
        <h3 style={{ fontSize:"15px"}}>
          Last Name
          </h3>
        <div className='lname'>
          <input
            type="text"
            id="lname"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formData.lname}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '350px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
            </div>
        <h3 style={{ fontSize:"15px"}}>
            Username
        </h3>
        <div className='Signupuser'>
        <input
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={handleChange}
            value={formData.username}
            style={{ 
                fontSize:'17px', 
                color:'#4E1E22' ,
                width: '350px', 
                height: '20px', 
                border: 'none',
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' }}/>
            </div>
          <h3 style={{ fontSize:"15px"}}>
            Email
          </h3>
            <div className='email'>
            <input
            type="text"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.email}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '350px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
            </div>
        <h3 style={{ fontSize:"15px"}}>
            Password
        </h3>
        <div className='Signuppass'>
        <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={formData.password}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '350px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
            </div>
      </div>
      <div className='Signupcont'>
      <button className='Signup' onClick={handleSignup}>
          Create Account
        </button>
      </div>
        <div className='Signupcont1'>
            <p>Already have an account? <span onClick={handleLogin} 
            style={{ 
            marginLeft: '2px',
            borderBottom: '2px solid #F6B460', 
            color: 'black', 
            cursor: 'pointer' 
            }} >Go to Login</span></p>
        </div>
        {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default Signup;