import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CCcss/Home.css'; // Assuming you have a separate CSS file for styling
import campusLogo from './CCcss/CCimage/campus.png';
import hrLogo from './CCcss/CCimage/hrlogo.png';
import hrComp from './CCcss/CCimage/hrcomp.png';
import paintWall from './CCcss/CCimage/PaintWall.jpg';
import GLEBuilding from './CCcss/CCimage/GLE.jpg';
import CITLib from './CCcss/CCimage/CITLib.jpg';
import CITCr from './CCcss/CCimage/CITcr.jpg';
import Lounge from './CCcss/CCimage/Lounge.jpg';
import WallFame from './CCcss/CCimage/FameWall.jpg';
import { AppBar, Toolbar, Typography,} from '@mui/material';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />


// IntroductionBox component
function IntroductionBox() {
  return (
    <div className="introduction-box">
      <p>
        Introducing CampusCompass – your all-in-one navigation companion for campus life! Seamlessly navigate through the labyrinth of buildings on your university grounds with ease, thanks to our intuitive and user-friendly app. Locate lecture halls, libraries, and all essential facilities effortlessly, ensuring you're always on time for classes.
      </p>
    </div>
  );
}

function UpdatesBox() {
  return (
    <div className="updates-box">
      <p>
        Stay in the loop with the latest university updates, news, and events right at your fingertips. Whether it's important announcements, campus happenings, or exciting events, you'll never miss a beat. Stay connected to the pulse of your university community with CampusCompass – where navigation meets information in one convenient app. Download now and experience campus life like never before!
      </p>
    </div>
  );
}

// SpinningImage component
function SpinningImage() {
  return (
    <div className="spinning-image">
      <div className="logo-container">
        <img src={hrLogo} alt="HR Logo" className="logo" />
        <img src={hrComp} alt="HR Comp" className="comp-logo" />
      </div>
    </div>
  );
}

// GalleryItem component
function GalleryItem({ src, description }) {
  return (
    <div className="gallery-item">
      <img src={src} alt={description} />
      <div className="text-overlay">
        <p>{description}</p>
      </div>
    </div>
  );
}
// GalleryBox component
function GalleryBox() {
  return (
    <div className="gallery-box">
      <h1 className="gallery-title">Exploring the Campus</h1>
      <div className="gallery-row">
        <GalleryItem src={paintWall} description="The famous painting wall in the 4th Floor of the Don Rodolfo T. Lizares Building" />
        <GalleryItem src={GLEBuilding} description="The newest state-of-the-art 8-storey Gregorio L. Escario building in the University" />
        <GalleryItem src={CITLib} description="The new library now called as the Learning Resource and Activity Center (LRAC)" />
      </div>
      <div className="gallery-row">
        <GalleryItem src={CITCr} description="The state-of-the-art restrooms in the Learning Resource and Activity Center" />
        <GalleryItem src={Lounge} description="The Wildcats Lounge, a coffee shop inside the campus ran by the students" />
        <GalleryItem src={WallFame} description="The Wall of Fame with the Topnotchers and the Kings and Queens of Engineers" />
      </div>
    </div>
  );
}

// AdditionalBox component
function AdditionalBox() {
  return (
    <div className="additional-box">
      <GalleryBox />
    </div>
  );
}

// DashboardBox component
function SmallBox({ title, content }) {
  return (
    <div className="small-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

// Updated BigBox component
function BigBox({ title, content }) {
  return (
    <div className="big-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}


function Footer() {
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate('/about');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleBackToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-pictures">
          <img src={hrLogo} alt="HR Logo" className='hr-logo' />
          <br />
          <img src={campusLogo} alt="Campus Logo" className='campus'/>
        </div>
        <div className="contact-info">
          <h1 className="contact-text">Contact us</h1>
          <address>
            <p className='contact-desc'>
              <span role="img" aria-label="Location">&#x1F4CD;</span> N. Bacalso Avenue, Cebu City, Philippines <br />
              <span role="img" aria-label="Email">&#x1F4E7;</span> Email: campuscompass@gmail.com <br />
              <span role="img" aria-label="Phone">&#x260E;</span> Phone: +63 9562541563
            </p>
          </address>
        </div>
        <div className="quick-links">
          <h1 className='links'>Quick Links</h1>
          <ul className='link-list'>
            <li onClick={handleAboutUs} style = {{ cursor: 'pointer'}} >About us</li>
            <li onClick={handleLogin}style = {{ cursor: 'pointer'}} >Login</li>
            <li onClick={handleSignUp}style = {{ cursor: 'pointer'}} >Sign Up</li>
            <li onClick={handleBackToTop}style = {{ cursor: 'pointer'}} >Back to top</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Home component
function Home1() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

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
    navigate('/login');
  };

  const handleHome = () => {
    setUser();
    navigate('/view-home');
  };

  const handleAbout = () => {
    navigate('/view-about');
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

      <div className="home">
        <IntroductionBox />
        <SpinningImage />
        <UpdatesBox />
        {/* ... (other content) */}
      </div>
      <AdditionalBox />
      <Footer />
    </div>
  );
}

export default Home1;