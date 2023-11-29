import React from 'react';
import ReactDOM from 'react-dom';
import './CCcss/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './Home';
import About from './About';
import Contact from './Contact';
import LandingPage from './LandingPage';
import Signup from './Signup';
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPassword';
import BuildingInformation from './BuildingInformation';
import ProfilePage from './ProfilePage';
import SearchBuilding from './SearchBuilding';
import NewPassword from './NewPassword';
import Events from './Events';
import AdminLogin from './AdminLogin';
import AdminBuildingInfo from './AdminBuildingInfo';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} /> {/* Render the Login component for the root route */}
        <Route path="/app" element={<App />} /> {/* Render the App component for the "/app" route */}
        <Route path="/about" element={<About />} /> {/* Render the App component for the "/app" route */}
        <Route path="/contact" element={<Contact />} /> {/* Render the App component for the "/app" route */}
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/buildinginfo" element={<BuildingInformation />} />
        <Route path="/user-profile" element={<ProfilePage />} />
        <Route path="/SearchBuilding" element={<SearchBuilding />} />
        <Route path="/update-password" element={<NewPassword />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin-building-info" element={<AdminBuildingInfo />} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
