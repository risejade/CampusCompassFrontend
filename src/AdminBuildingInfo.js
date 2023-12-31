import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
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
import GYMloc from './CCcss/CCimage/GYMloc.png'
import GLEloc  from './CCcss/CCimage/GLEloc.png';
import SALloc  from './CCcss/CCimage/SALloc.png';
import RTLloc  from './CCcss/CCimage/RTLloc.png';
import ACADloc  from './CCcss/CCimage/ACADloc.png';
import NGEloc  from './CCcss/CCimage/NGEloc.png';
import PEloc  from './CCcss/CCimage/PEloc.png';
import ELEMloc  from './CCcss/CCimage/ELEMloc.png';
import ALLIEDloc from './CCcss/CCimage/ALLIEDloc.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NavBar from './NavBar';
import axios from 'axios';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

function AdminBuildingInfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    info: '',
  });

  const [updatedBuildingInfo, setUpdatedBuildingInfo] = useState({
    name: '',
    info: '',
  });

  useEffect(() => {
    setUpdatedBuildingInfo({
      name: formData.name,
      info: formData.info,
    });
  }, [formData]);

  const CustomCard = ({ imgSrc, imgAlt, title, description, buttonText, link }) => {
    const [showImage, setShowImage] = useState(false);
  
    const cardStyle = {
      width: '400px', 
      height: showImage ? 'auto' : '485px', 
    };
  
    const handleButtonClick = () => {
      setShowImage(!showImage);
    };
    const handleEdit = () => {
      // Functionality to handle edit action
      // You can implement your logic here
      console.log('Edit button clicked');
    };
  
    const handleDelete = () => {
      // Functionality to handle delete action
      // You can implement your logic here
      console.log('Delete button clicked');
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
        <Button size="small" color="primary" onClick={handleButtonClick}>
          {showImage ? 'Hide Location' : buttonText}
        </Button>
        <IconButton size="small" onClick={handleEdit}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton size="small" onClick={handleDelete}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
        )}
        {showImage && (
          <CardActionArea>
            <CardMedia component="img" height="auto" image={link} alt="Location Image" />
          </CardActionArea>
        )}
      </Card>
    );
  };
  
  const handleOk = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/building/getAllBuilding', {
      name: formData.name,
      info: formData.info,
  }, {
      headers: {
          'Content-Type': 'application/json',
      },
  });
      const data = await response.json();
  
      console.log('Building data from backend:', data);
  
      // Update the formData state with the fetched data
      setFormData({
        name: data.name,
        info: data.info,
      });
    } catch (error) {
      console.error('Error fetching building data:', error);
    }
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

  const handleEvents = () => {
    navigate('/Events');
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  const handleAdmin = () => {
    navigate('/adminlogin');
  };

  const handleAdd = () => {
    navigate('/admin-building-info-add');
    console.log('Add button clicked');
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
            handleEventso={handleEvents}
          /> 
    <br></br>
        <div className='add-button'>
            <IconButton onClick={handleAdd} style={{ color: '#4E1E22', marginLeft:'1400px'}}>
            <AddCircleOutlineIcon fontSize="large"/>
            </IconButton>
        </div>
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
                link={ACADloc}
                
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
                link={ALLIEDloc}
                />
            <CustomCard
                imgSrc={ELEM} 
                imgAlt="Card Image 3"
                title="ELEMENTARY BUILDING"
                description="Elementary Building Opened in 1992, the 
                building hosts the school's nursery school, kindergarten, 
                and elementary department. It also hosts a playground 
                open to the school's younger students."
                buttonText="See Location"
                link={ELEMloc}
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
                link={NGEloc}
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
                link={GLEloc}
                
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
                link={SALloc}
                />
            <CustomCard
                imgSrc={PE}
                imgAlt="Card Image 1"
                title="P.E AREA"
                buttonText="See Location"
                link={PEloc}
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
                link={RTLloc}
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
                
                buttonText ="See Location"
                link={GYMloc}
                />
            </div>
                <br></br>
                <br></br>
                <div className='adminInfo'>
                    <Button onClick={handleBuildingInfo} style={{ color: 'white' }}>
                        logout
                    </Button>
                </div>
    </div>
    
    );
}

export default AdminBuildingInfo;