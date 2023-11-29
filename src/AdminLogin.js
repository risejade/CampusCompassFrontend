import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/AdminLogin.css';
import campusLogo from './CCcss/CCimage/campus.png';
import axios from 'axios';
import NavBar from './NavBar';

function AdminLogin() {
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

  const handleLogin = () => {
    navigate('/adminaddevent'); 
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
      <NavBar
        handleHome={handleHome}
        handleAbout={handleAbout}
        handleLandingPage={handleLandingPage}
        user={user}
        campusLogo={campusLogo}
      />
      <div className='AdminText'>
        <h2 className='AdmintextFormat'>
          ADMIN ACCESS
        </h2>
      </div>
      <div className='Adminatts'>
        <h3>
            Username
        </h3>
        <div className='usera'>
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
        <div className='passa'>
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
            <div className='rempassa' style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <input type="checkbox" id="rememberPassword" style={{ marginRight: '5px', cursor: 'pointer' }} />
                <label htmlFor="rememberPassword" 
                style={{ color:'black',}}>
                    Remember Password</label>
            </div>
      </div>
      <div className='logincont11'>
      <button className='login11' onClick={handleLogin} variant="outlined" >
        Login
      </button>
      </div>
        <div className='signupcont1'>
            <p>Don't have an account yet? <span onClick={handleSignUp} 
            style={{ 
            marginLeft: '2px',
            borderBottom: '2px solid #F6B460', 
            color: 'black', 
            cursor: 'pointer' 
            }} >Sign Up</span></p>
        </div>
        <div className='Adminimageback'>
        </div>
    </div>
  );
}

export default AdminLogin;