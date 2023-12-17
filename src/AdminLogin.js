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
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleAdminLogin = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/admin/getAllAdmin', {
        auth: {
          username: formData.username,
          password: formData.password,
        },
      });

      console.log('Response:', response);
      if (response.status === 200) {
        console.log('Login successful!');
        const firstName = response.data.fname;
        setUser({ firstName });
        navigate('/admin-home');
        alert('Login successful!');
      } else {
        console.error('Login failed:', response.data);
        setLoginError('Invalid username or password');
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('An error occurred while logging in');
      alert('An error occurred while logging in');
    }
  };

  const handleAbout = () => {
    navigate('/about'); 
  };
  const handleHome = () => {
    navigate('/home'); 
  };

  const handleLandingPage = () => {
    navigate('/landingpage');
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
        <div className='passa'>
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
      </div>
      <div className='logincont11'>
      <button className='login11' onClick={handleAdminLogin} variant="outlined" >
        Login
      </button>
      </div>
        <div className='Adminimageback'>
        </div>
    </div>
  );
}

export default AdminLogin;