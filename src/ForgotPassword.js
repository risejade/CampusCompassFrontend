import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/ForgotPassword.css';
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';

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
      <NavBar
            handleHome={handleHome}
            handleAbout={handleAbout}
            handleLandingPage={handleLandingPage}
            user={user}
            campusLogo={campusLogo}
            />
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