import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/ForgotPassword.css';
import campusLogo from './CCcss/CCimage/campus.png';

function ForgotPassword() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    document.body.classList.add('Login-page');

    return () => {
      document.body.classList.remove('Login-page');
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
  const handleSignUp = () => {
    navigate('/signup');
  };
  const handleUpdatePass = () => {
    navigate('/update-password')
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
      <div className='Forgotpass'>
        <h2 className='forgottextFormat'>
          Forgot Password
        </h2>
      </div>
      <div className='forgotatts'>
        <h3>
            Enter your email
        </h3>
        <div className='user'>
            <input type="text" id="uname" placeholder="Enter your email"
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
      </div>
      <div className='logincont'>
      <button className='login'  onClick={handleUpdatePass} variant="outlined" >
        Verify Email
      </button>
      </div>
      <div className='backcont'>
      <button className='back' onClick={handleLogin} variant="outlined" >
        back
      </button>
      </div>
    </div>
  );
}
export default ForgotPassword;