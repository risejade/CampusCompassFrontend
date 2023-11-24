import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/LandingPage.css';
import campusLogo from './CCcss/CCimage/campus.png';
import campusGearLogo from './CCcss/CCimage/campusGear.png';
import NavBar from './NavBar';


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
  const  handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
        <NavBar
            handleHome={handleHome}
            handleAbout={handleAbout}
            handleLandingPage={handleLandingPage}
            user={user}
            campusLogo={campusLogo}
            />
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