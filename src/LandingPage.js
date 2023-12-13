import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './CCcss/LandingPage.css';
import campusLogo from './CCcss/CCimage/campus.png';
import campusGearLogo from './CCcss/CCimage/campusGear.png';
import { AppBar, Toolbar, Typography,} from '@mui/material';

function LandingPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    document.body.classList.add('landing-page');

    return () => {
      document.body.classList.remove('landing-page');
    };
  }, []);
  useEffect(() => {
    document.body.classList.add('landing-page1');

    return () => {
      document.body.classList.remove('landing-page1');
    };
  }, []);

  const handleLogin = () => {
    setUser();
    navigate('/login'); 
  };

  const handleHome = () => {
    setUser();
    navigate('/view-user'); 
  };

  const handleAbout = () => {
    navigate('/view-about'); 
  };

  const handleContact = () => {
    navigate('/contact');
  };
  const handleLandingPage = () => {
    navigate('/landingpage');
  };
  const  handleSignup = () => {
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
                  </div>
                  </Toolbar>
                </AppBar>
        <div>
        <img src={campusGearLogo} alt="Campus Gear" class="gear-overlay"/>
        </div>
        <div className='getstarted'>
          <button className='login2' onClick={handleLogin} variant='outlined' >
              Login
          </button>
          <button className='signup2'onClick={handleSignup} variant='outlined' >
              Sign Up
          </button>
        </div>
          </div>
  );
}

export default LandingPage;