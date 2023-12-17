import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import './CCcss/Signup.css';
import campusLogo from './CCcss/CCimage/campus.png';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fname: '',
    Lname:'',
    username: '',
    email: '',
    password: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.body.classList.add('Signup-page');

    return () => {
      document.body.classList.remove('Signup-page');
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

  const handleLandingPage = () => {
    navigate('/landingpage');
  };

  const handleForgotPass = () => {
    navigate('/forgotpass')
  };

  const handleSignup = async () => {
    console.log('Entered password:', formData.password); // Log entered password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  
    console.log('Password validation result:', passwordPattern.test(formData.password)); // Log result of validation
  
    if (!passwordPattern.test(formData.password)) {
      setPasswordError('Password should be at least 8 characters, with uppercase, lowercase, and special characters.');
      return; // Prevent further execution if password criteria are not met
    }
  
    try {
      const response = await axios.post('http://localhost:8080/usercampus/insertUsercampus', {
        fname: formData.fname,
        lname: formData.lname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gender: formData.gender
      });
  
      // Assuming the signup was successful
      console.log('User created:', response.data);
  
      // Show success message using window.alert()
      window.alert('Account successfully created');
  
      // Clear form data after successful submission if needed
      setFormData({
        fname: '',
        username: '',
        email: '',
        password: ''
      });
  
      // Redirect to login page or any other desired page after successful signup
      navigate('/login');
    } catch (error) {
      // Handle error responses
  
      // Show error message using window.alert()
      window.alert('Failed to create account. Please try again.');
  
      console.error('Error creating user:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (e.target.id === 'password') {
      setPasswordError('');
    }
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


      <div className='SignupText' >
        <h2 className='SignupTextFormat' style={{ fontSize:"30px"}}>
          Sign Up
        </h2>
      </div>


        <div className='fnamecont'>
        <h3 style={{ fontSize:"15px"}}>
          First Name
          </h3>
        <div className='fname'>
          <input
            type="text"
            id="fname"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formData.fname}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '150px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px',
                
                }}/>
             </div>
           </div>

      <div className='lnamecont'>
        <h3 style={{ fontSize:"15px", width:'150', textAlign:'right'}}>
          Last Name
          </h3>
        <div className='lname'>
          <input
            type="text"
            id="lname"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formData.lname}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '150px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
            </div>
          </div> 

          <div className='gender1'>
            <h3 style={{ fontSize:"15px"}}>
              Gender
            </h3>
            <div className='gender'>
              <select
                id="gender"
                onChange={handleChange}
                value={formData.gender}
                style={{ 
                  fontSize:'17px',
                  color:'#4E1E22', 
                  width: '350px', 
                  height: '40px', 
                  border: 'none', 
                  backgroundColor: '#F6B460', 
                  borderRadius: '10px',
                  padding: '10px', 
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="undecided">Undecided</option>
              </select>
            </div>  
          </div>  

      <div className='Signupatts'>
        <h3 style={{ fontSize:"15px"}}>
            Username
        </h3>
        <div className='Signupuser'>
        <input
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={handleChange}
            value={formData.username}
            style={{ 
                fontSize:'17px', 
                color:'#4E1E22' ,
                width: '350px', 
                height: '20px', 
                border: 'none',
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' }}/>
            </div>
          <h3 style={{ fontSize:"15px"}}>
            Email
          </h3>
            <div className='email'>
            <input
            type="text"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.email}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '350px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
            </div>
        <h3 style={{ fontSize:"15px"}}>
            Password
        </h3>
        <div className='Signuppass'>
        <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={formData.password}
              style={{ 
                fontSize:'17px',
                color:'#4E1E22', 
                width: '350px', 
                height: '20px', 
                border: 'none', 
                backgroundColor: '#F6B460', 
                borderRadius: '10px',
                padding: '10px' 
                }}/>
              <div className='showpass'>
                 <Button
                      variant='contained'
                      onClick={handleTogglePassword}
                      style={{
                        width: '50px',
                        height: '40px',
                        backgroundColor: '#F6B460',
                        border: 'none',
                        color: '#4E1E22',
                        cursor: 'pointer',
                        position:'fixed',
                        marginTop: '19px', 
                        marginLeft:'305px',
                        borderRadius:'200px'
                      }}
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </Button>
                </div>
            </div>

            {passwordError && <div className="password-error" 
            style={{ 
              maxWidth: '250px', 
              marginTop: '15px', 
              padding: '8px', 
              backgroundColor: 'rgba(255, 0, 0, 0.2)', 
              borderRadius: '5px',
              textAlign:'center', 
              fontSize: '12px',
              marginLeft:'0px'
              }}>
                {passwordError}
                </div>}

      </div>
      <div className='Signupcont'>
      <button className='Signup' onClick={handleSignup}>
          Create Account
        </button>
      </div>
        <div className='Signupcont1'>
            <p>Already have an account? <span onClick={handleLogin} 
            style={{ 
            marginLeft: '2px',
            borderBottom: '2px solid #F6B460', 
            color: '#F6B460', 
            cursor: 'pointer' 
            }} >Go to Login</span></p>
        </div>
        {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default Signup;