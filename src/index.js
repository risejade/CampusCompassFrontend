import React from 'react';
import ReactDOM from 'react-dom';
import './CCcss/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './Home';
import About from './About';
import LandingPage from './LandingPage';
import Signup from './Signup';
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPassword';
import BuildingInformation from './BuildingInformation';
import ProfilePage from './ProfilePage';
import SearchBuilding from './SearchBuilding';
import NewPassword from './NewPassword';
import Events from './Events';
import MaintenanceReport from './MaintenanceReport';
import AdminLogin from './AdminLogin';
import AdminBuildingInfo from './AdminBuildingInfo';
import AdminAddEvent from './AdminAddEvent';
import AdminHome from './AdminHomePage';
import AdminBIEdit from './AdminBIEdit';
import Home1 from './home1';
import About1 from './About1';
import Dashboard from './Dashboard';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} /> {/* Render the Login component for the root route */}
        <Route path="/app" element={<App />} /> {/* Render the App component for the "/app" route */}
        <Route path="/about" element={<About />} /> {/* Render the App component for the "/app" route */}
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/buildinginfo" element={<BuildingInformation />} />
        <Route path="/user-profile" element={<ProfilePage />} />
        <Route path="/SearchBuilding" element={<SearchBuilding />} />
        <Route path="/update-password" element={<NewPassword />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/maintenance" element={<MaintenanceReport />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin-building-info" element={<AdminBuildingInfo />} />
        <Route path="/adminaddevent" element={<AdminAddEvent />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin-building-info-add" element={<AdminBIEdit />} />
        <Route path="/view-home" element={<Home1 />} />
        <Route path="/view-about" element={<About1/>} />
        <Route path="/admin-dashboard" element={<Dashboard/>} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
