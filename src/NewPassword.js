import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CCcss/NewPassword.css';
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';


function NewPassword() {
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

  const handleLandingPage = () => {
    navigate('/landingpage');
  };
  const handleForgotPass = () => {
    navigate('/forgotpass');
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
      <div className='newpass'>
        <h2 className='newtextFormat'>
          Update Password
        </h2>
      </div>
      <div className='newpassatts'>
        <h3>
            New Password
        </h3>
        <div className='user'>
            <input type="text" id="uname" placeholder="Enter your new password"
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
            Confirm Password
        </h3>
        <div className='pass'>
              <input type="password" id="npword"  placeholder="Confirm your password" 
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
      <div className='newcont'>
      <button className='newlogin' onClick={handleLogin} variant="outlined" >
        Change Password
      </button>
      </div>
      <div className='newbackcont'>
      <button className='newback' onClick={handleForgotPass} variant="outlined" >
        back
      </button>
      </div>
    </div>
  );
}
export default NewPassword;