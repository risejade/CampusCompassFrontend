import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CCcss/AdminAddEvent.css'; 
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';
import AdminActiveSlider from './AdminEventcomponents/AdminActiveSlider';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap" />

function AdminAddEvent() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

 
  const Appli = () => {
    const [selectedImages, setSelectedImages] = useState([]);
  
    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }
    return (
      <section>
        <label className="file-label">
          + Add Images
          <br />
          <span>up to 10 images</span>
          <input
            className="file-input"
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p className="error">
              You can't upload more than 10 images! <br />
              <span>
                please delete <b> {selectedImages.length - 10} </b> of them{" "}
              </span>
            </p>
          ) : (
            <button
              className="upload-btn"
              onClick={() => {
                console.log(selectedImages);
              }}
            >
              UPLOAD {selectedImages.length} IMAGE
              {selectedImages.length === 1 ? "" : "S"}
            </button>
          ))}
        <div className="imagesadmin">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image">
                  <img src={image} height="200" alt="upload" />
                  <button onClick={() => deleteHandler(image)}>
                    delete image
                  </button>
                  <p>{index + 1}</p>
                </div>
              );
            })}
        </div>
          <h3
              style={{
                  color:'white',
                  marginLeft:'25px',
                  fontSize:'20px',
                  letterSpacing:'2px',
                  textShadow: '0 0 5px#4E1E22, 0 0 5px #4E1E22, 0 0 5px #4E1E22'
              }}>
                  Event Title:
              </h3>
          <input
                type="text"
                placeholder="Enter your title here"
                style={{ 
                    fontSize:'17px', 
                    color:'#4E1E22' ,
                    marginLeft:'25px',
                    width: '350px', 
                    height: '30px', 
                    border: 'none',
                    backgroundColor: '#F6B460', 
                    borderRadius: '10px',
                    padding: '10px' }}/>
                    <br></br>
                  <h3 style={{
                      color:'white',
                      fontSize:'20px',
                      marginLeft:'25px',
                      letterSpacing:'2px',
                      textShadow: '0 0 5px#4E1E22, 0 0 5px #4E1E22, 0 0 5px #4E1E22'
                  }}>
                      Event Description:
                  </h3>
                  <input
                          type="text"
                          placeholder="Enter your description here"
                          style={{ 
                              fontSize:'17px', 
                              color:'#4E1E22' ,
                              marginLeft:'25px',
                              width: '350px', 
                              height: '30px', 
                              border: 'none',
                              backgroundColor: '#F6B460', 
                              borderRadius: '10px',
                              padding: '10px' }}/>
        </section>
        
      );
}
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
          <Appli/> 
          <AdminActiveSlider/>
    </div>
    );
  }

export default AdminAddEvent;