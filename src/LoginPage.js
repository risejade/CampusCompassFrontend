import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/LoginPage.css';
import campusLogo from './CCcss/CCimage/campus.png';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  useEffect(() => {
    document.body.classList.add('Login-page');

    return () => {
      document.body.classList.remove('Login-page');
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/usercampus/getAllUsercampus', {
        username,
        password,
      });
  
      // Assuming the API response contains a success status or a token upon successful login
      const { success, token } = response.data;
  
      if (success) {
        // Handle successful login, e.g., set user session with token, redirect, etc.
        console.log('Login successful!');
        // You can set the token in session storage or cookies for authentication
  
        navigate('/home'); // Redirect to home page after successful login
      } else {
        // Handle login failure
        console.error('Login failed:', response.data.error);
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Login failed:', error);
      setLoginError('An error occurred while logging in');
    }
  };

  const handleAbout = () => {
    navigate('/about'); 
  };
  const handleHome = () => {
    navigate('/home'); 
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
  const handleSignUp = () => {
    navigate('/signup');
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
      <div className='loginText'>
        <h2 className='logintextFormat'>
          Login
        </h2>
      </div>
      <div className='loginatts'>
        <h3>
            Username
        </h3>
        <div className='user'>
        <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ 
                fontSize:'17px', 
                color:'#4E1E22' ,
                width: '350px', 
                height: '30px', 
                border: 'none',
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' }}/>
            </div>
        <h3>
            Password
        </h3>
        <div className='pass'>
        <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '350px', 
                height: '30px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
            </div>
            <div className='rempass' style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <input type="checkbox" id="rememberPassword" style={{ marginRight: '5px', cursor: 'pointer' }} />
                <label htmlFor="rememberPassword" 
                style={{ color:'black',}}>
                    Remember Password</label>
                <span 
                style={{ 
                    marginLeft: '75px', 
                    color: 'black', 
                    cursor: 'pointer',
                    borderBottom: '2px solid #F6B460'
                    }} onClick={handleForgotPass}>
                        Forgot Password?</span>
            </div>
      </div>
      <div className='logincont1'>
      <button className='login1' onClick={handleLogin} variant="outlined" >
        Login
      </button>
      </div>
        <div className='signupcont'>
            <p>Don't have an account yet? <span onClick={handleSignUp} 
            style={{ 
            marginLeft: '2px',
            borderBottom: '2px solid #F6B460', 
            color: 'black', 
            cursor: 'pointer' 
            }} >Sign Up</span></p>
        </div>
    </div>
  );
}

export default LoginPage;