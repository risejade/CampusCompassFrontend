import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/About.css';
import campusLogo from './CCcss/CCimage/campus.png';
import rise from './CCcss/CCimage/rise.png';
import yankee from './CCcss/CCimage/yank.png';
import thesaly from './CCcss/CCimage/thes.png';
import andre from './CCcss/CCimage/andre.png';

function About() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    document.body.classList.add('about-page');

    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

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
      <div className='container-aboutus'>
      < div className='about-description'>
        <p>
        Meet the visionary minds behind 
        CampusCompass! Faced with the 
        universal challenge of navigating 
        sprawling university campuses, 
        our dynamic quartet embarked on
        a mission to simplify the student 
        experience. With a shared passion 
        for enhancing campus life, we 
        crafted this web app to make 
        navigation a breeze. Join us 
        on this journey to transform 
        the way students explore their 
        academic haven. Welcome to 
        CampusCompass – where ease 
        meets exploration!
        </p>
      </div>
        <div className='image-container'>
            <div className='rise'>
              <img src={rise} alt="The Campus Logo" style={{ position: 'relative', width: '265px', height: 'auto' }} />
            </div>
            <div className='yankee'>
              <img src={yankee} alt="The Campus Logo" style={{ position: 'relative', width: '250px', height: 'auto' }} />
            </div>
            <div className='thesaly'>
              <img src={thesaly} alt="The Campus Logo" style={{ position: 'relative', width: '250px', height: 'auto' }} />
            </div>
            <div className='andre'>
              <img src={andre} alt="The Campus Logo" style={{ position: 'relative', width: '250px', height: 'auto' }} />
            </div>
          </div>
      </div>
  </div>
  );
}

export default About;