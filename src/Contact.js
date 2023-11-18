import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleShortcut = () => {

    navigate('/home'); 
  };
  return (
    <>
    <h2>This is Contact Page</h2>
      <div className='goto'>
      <Button onClick={handleShortcut }>Go to Home Page</Button>
      </div>
    </>
  );
}

export default Contact;