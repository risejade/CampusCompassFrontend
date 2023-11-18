import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CreateUser({ onCreateUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleCreateUser = () => {
    axios.post(`http://hyeumine.com/forumCreateUser.php`, {
      username: username,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      if (response.status === 200 && response.statusText === "OK") {
        return response.data;
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(user => {
      onCreateUser(user);
      navigate('/app');
    })
    .catch(error => {
      console.error('There was a problem with the user creation operation:', error);
    });
  };
  const handleShortcut = () => {
    // Perform logout operation, for example, clearing user session
    setUser(null);

    // Optionally, you can clear user session in localStorage or perform other cleanup tasks here

    // Redirect the user to the login page after logout
    navigate('/app'); // Assuming '/login' is the route for the login page
  };

  return (
    <>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <div className='pass'>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button onClick={handleShortcut}>Create User</Button>
    </>
  );
}

export default CreateUser;
