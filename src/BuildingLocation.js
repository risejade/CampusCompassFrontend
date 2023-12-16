import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import './CCcss/BuildingInformation.css'; 
import campusLogo from './CCcss/CCimage/campus.png';
import GLE from './CCcss/CCimage/GLE.jpg';
import SAL from './CCcss/CCimage/SAL.jpg';
import RTL from './CCcss/CCimage/RTL.jpg';
import GYM from './CCcss/CCimage/GYM.jpg';
import ACADS from './CCcss/CCimage/ACADS.jpg';
import NGE from './CCcss/CCimage/NGE.png';
import PE from './CCcss/CCimage/PE.jpg';
import ELEM from './CCcss/CCimage/ELEM.jpg';
import NavBar from './NavBar';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

function BuildingLocation() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const CustomCard = ({ imgSrc, imgAlt, title, description, buttonText, link }) => {
    const cardStyle = {
      width: '400px', 
      height: '485px', 
    };
  
    return (
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia component="img" height="250" image={imgSrc} alt={imgAlt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" textAlign="justify" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {buttonText && link && (
          <CardActions>
            <Button size="small" color="primary" href={link}>
              {buttonText}
            </Button>
          </CardActions>
        )}
      </Card>
    );
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on : ${item}`);
    handleDropdownClose();
  };
  const handleLogin = () => {
    setUser();
    navigate('/app');
  };

  const handleHome = () => {
    setUser();
    navigate('/home');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const handleLandingPage = () => {
    navigate('/landingpage');
  };
  const handleLogout = () => {
    navigate('/landingpage');
  };

  const handleBuildingInfo = () => {
    navigate('/buildinginfo');
  };

  const handleSearchBldg = () => {
    navigate('/SearchBuilding');
  };
  

  return (
    <div >
     <NavBar
        handleHome={handleHome}
        handleAbout={handleAbout}
        handleDropdownClick={handleDropdownClick}
        handleDropdownClose={handleDropdownClose}
        handleSearchBldg={handleSearchBldg}
        handleBuildingInfo={handleBuildingInfo}
        handleItemClick={handleItemClick}
        handleLandingPage={handleLandingPage}
        user={user}
        handleLogout={handleLogout}
        stopPropagation={stopPropagation}
        campusLogo={campusLogo}
      />

      <div className="card-columns">
      <CustomCard 
          imgSrc={ACADS} 
          imgAlt="Card Image 1"
          title="ACADEMIC BUILDING"
          description="Academic Building Inaugurated in 2006, 
          this building hosts the College of Engineering 
          and Architecture.
          "
          buttonText="See Location"
          link="card2"
        />
       <CustomCard
          imgSrc={GLE} 
          imgAlt="Card Image 2"
          title="ALLIED ENGINEERING"
          description="Allied Engineering Building Situated 
          behind the Main Building, these rooms are used 
          mostly used for laboratory classes by the College 
          of Engineering and Architecture.
          "
          buttonText="See Location"
          link="card2"
        />
       <CustomCard
          imgSrc={ELEM} 
          imgAlt="Card Image 3"
          title="EELEMENTARY BUILDING"
          description="Elementary Building Opened in 1992, the 
          building hosts the school's nursery school, kindergarten, 
          and elementary department. It also hosts a playground 
          open to the school's younger students."
          buttonText="See Location"
          link="card2"
        />
        <CustomCard
          imgSrc={NGE} 
          imgAlt="Card Image 1"
          title="NGE"
          description="Dr. Nicolas G. Escario, Sr. Building
          This building was named in honor of Dr. Nicolas G. Escario, Sr., 
          Founder and first President of Cebu Institute of Technology (CIT).
          The building was completed in 2003 during the term of 
          Gregorio L. Escario, son of the Founder and third President of CIT.
          "
          buttonText="See Location"
          link="card1"
        />
        <CustomCard
          imgSrc={GLE} 
          imgAlt="Card Image 3"
          title="GLE"
          description="Gregorio L. Escario Building Opened in 2021, the new 8-storey 
          building is situated in front of the Academic Building. It is a multi-purpose 
          building with lecture hall-style rooms, as well as general classrooms. 
          It was named after the university's third president Gregorio L. Escario"
          buttonText="See Location"
          link="card2"
          
        />
        <CustomCard
          imgSrc={SAL} 
          imgAlt="Card Image 3"
          title="SAL"
          description="Don Simplicio A. Lizares Building Opened in 1999, 
          the building was originally called the High School building. 
          In 2018, it was renamed as the Don Simplicio A. Lizares Building, 
          to honor the school's first Chairman of the Board of Trustees."
          buttonText="See Location"
          link="card2"
        />
      <CustomCard
          imgSrc={PE}
          imgAlt="Card Image 1"
          title="P.E AREA"
          buttonText="See Location"
          link="card1"
        />

        <CustomCard
          imgSrc={RTL} 
          imgAlt="Card Image 3"
          title="RTL"
          description="Don Rodolfo T. Lizares, Sr. Building
          Opened in 1971, this building was the first to be 
          built in the school's N. Bacalso campus. It is 
          also known as the Main Building or the RTL Building"
          buttonText="See Location"
          link="card2"
        />
        <CustomCard
          imgSrc={GYM} 
          imgAlt="Card Image 3"
          title="SCHOOL GYMNASIUM"
          description="CIT-U Gymnasium Constructed in 2004, 
          this air-conditioned gymnasium is located behind 
          the Don Simplicio A. Lizares Building and is where 
          events and ceremonies are held. PE classes and 
          other recreational activities also occur here."
          buttonText="See Location"
          link="card2"
        />
    </div>
    </div>
    
    );
}

export default BuildingLocation;