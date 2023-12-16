import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import './CCcss/About.css';
import campusLogo from './CCcss/CCimage/campus.png';
import rise from './CCcss/CCimage/rise.png';
import yankee from './CCcss/CCimage/yank.png';
import thesaly from './CCcss/CCimage/thes.png';
import andre from './CCcss/CCimage/andre.png';

function About(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  useEffect(() => {
    document.body.classList.add('about-page');

    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

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
    try {
      const isConfirmed = window.confirm("Are you sure you want to update the information?");
  
      if (!isConfirmed) {
        return;
      }

      navigate('/landingpage');
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
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
        user={props.user}
        handleLogout={handleLogout}
        stopPropagation={stopPropagation}
        campusLogo={campusLogo}
      />

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

export default About;