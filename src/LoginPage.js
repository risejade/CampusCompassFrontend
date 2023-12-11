import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './CCcss/LoginPage.css';
import campusLogo from './CCcss/CCimage/campus.png';
import axios from 'axios';
import loginImage from './CCcss/CCimage/login.png'
import NavBar from './NavBar';

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

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    document.body.classList.add('Login-page1');

    return () => {
      document.body.classList.remove('Login-page1');
    };
  }, []);

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
        navigate('/home');
      } else {
        console.error('Login failed:', response.data);
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('An error occurred while logging in');
    }
  };

  const handleRedirect = (path) => {
    navigate(path);
  };
  
  const handleHome = () => {
    navigate('/home');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleLandingPage = () => {
    navigate('/landing');
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
        <div className='pass'>
        <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
            <div className='rempass' style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <input type="checkbox" id="rememberPassword" style={{ marginRight: '5px', cursor: 'pointer' }} />
                <label htmlFor="rememberPassword" 
                style={{ color:'black',}}>
                    Remember Password</label>
                <span 
                style={{ 
                    marginLeft: '75px', 
                    color: 'black', 
                    cursor: 'pointer',
                    borderBottom: '2px solid #F6B460'
                    }} onClick={() => handleRedirect('/forgotpass')}>
                        Forgot Password?</span>
            </div>
      </div>
      <div className='logincont1'>
      <button className='login1' onClick={handleLogin} variant="outlined" >
        Login
      </button>
      </div>
        <div className='signupcont'>
            <p>Don't have an account yet? <span onClick={() => handleRedirect('/signup')} 
            style={{ 
            marginLeft: '2px',
            borderBottom: '2px solid #F6B460', 
            color: 'black', 
            cursor: 'pointer' 
            }} >Sign Up</span></p>
        </div>
        <div className='imageback'>
        </div>
    </div>
  );
}

export default LoginPage;