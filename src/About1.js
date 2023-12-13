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

function About1() {
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
    navigate('/login'); 
  };

  const handleHome = () => {
    setUser();
    navigate('/view-home'); 
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
        <div className='service' onClick={handleLogin} style={{ cursor: 'pointer' }}>
          <Typography variant="button">
           Login
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
          <img src={rise} alt="Rise" style={{ position: 'relative', width: '265px', height: 'auto' }} />
            <div className='quote-rise'>
              <p>"Coding is the toolkit for turning imagination into innovation."</p>
            </div>
          </div>
          <div className='yankee'>
            <img src={yankee} alt="Yankee" style={{ position: 'relative', width: '250px', height: 'auto' }} />
            <div className='quote-yankee'>
              <p>"Writing code is like painting a picture; it's about creating something from nothing."</p>
            </div>
          </div>
          <div className='thesaly'>
            <img src={thesaly} alt="Thesaly" style={{ position: 'relative', width: '250px', height: 'auto' }} />
            <div className='quote-thesaly'>
              <p>"In programming, every problem is an opportunity for an elegant solution."</p>
            </div>
          </div>
          <div className='andre'>
            <img src={andre} alt="Andre" style={{ position: 'relative', width: '250px', height: 'auto' }} />
            <div className='quote-andre'>
              <p>"Code shapes ideas into reality, one keystroke at a time."</p>
            </div>
         </div>
        </div>
      </div>
  </div>
  );
}

export default About1;