import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './CCcss/LoginPage.css';
import campusLogo from './CCcss/CCimage/campus.png';
import axios from 'axios';
import loginImage from './CCcss/CCimage/login.png'
import { AppBar, Toolbar, Typography,} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  useEffect(() => {
    document.body.classList.add('Login-page1');
  
    const rememberedPassword = localStorage.getItem(formData.username);
    if (rememberedPassword) {
      setFormData(prevData => ({ ...prevData, password: rememberedPassword }));
      setRememberPassword(true);
    }
  
    return () => {
      document.body.classList.remove('Login-page1');
    };
  }, [formData.username]);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/usercampus/login', {
        username: formData.username,
        password: formData.password,
      });
  
      console.log('Response:', response); // Logging the response data
      if (response.status === 200) {
        console.log('Login successful!');
        // Save password to local storage if "Remember Password" is checked
        if (rememberPassword) {
          localStorage.setItem(formData.username, formData.password);
        }
        const firstName = response.data.fname; // Adjust this based on your API response structure
        setUser({ firstName });
        navigate('/home');
        alert('Login successful!'); // Alert for successful login
      } else {
        console.error('Login failed:', response.data);
        setLoginError('Invalid username or password');
        alert('Invalid username or password'); // Alert for invalid credentials
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('An error occurred while logging in');
      alert('An error occurred while logging in'); // Alert for login error
    }
  };

  const handleRememberPassword = () => {
    setRememberPassword(!rememberPassword);
    if (!rememberPassword) {
      localStorage.removeItem(formData.username); // Clear stored password if unchecked
    }
  };

  const handleRedirect = (path) => {
    navigate(path);
  };
  
  const handleHome = () => {
    navigate('/view-home');
  };

  const handleAbout = () => {
    navigate('/view-about');
  };

  const handleLandingPage = () => {
    navigate('/landingpage');
  };

  const handleSignup= () => {
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
                  <div className='service' onClick={handleSignup} style={{ cursor: 'pointer' }}>
                    <Typography variant="button">
                      Sign Up
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
        <input
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
        <div className='pass' style={{ position: 'relative' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        style={{
          fontSize: '17px',
          color: '#4E1E22',
          width: '350px',
          height: '30px',
          border: 'none',
          backgroundColor: '#F6B460',
          borderRadius: '10px',
          padding: '10px',
        }}
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color:'#4E1E22'
            }}
            onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>
      </div>
      <div className='logincont1'>
      <button className='login1' onClick={handleLogin} variant="outlined" >
        Login
      </button>
      </div>
        <div className='imageback'>
        </div>
    </div>
  );
}

export default LoginPage;