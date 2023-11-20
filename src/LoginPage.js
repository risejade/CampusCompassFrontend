import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/LoginPage.css';
import campusLogo from './CCcss/CCimage/campus.png';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    document.body.classList.add('Login-page');

    return () => {
      document.body.classList.remove('Login-page');
    };
  }, []);

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
            <input type="text" id="uname" placeholder="Enter your username"
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
              <input type="password" id="npword"  placeholder="Enter your password" 
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
      <button className='login1' onClick={handleHome} variant="outlined" >
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