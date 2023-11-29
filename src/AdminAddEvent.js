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
          <label>
            + Add Images
            <br />
            <span>up to 10 images</span>
            <input
              type="file"
              name="images"
              onChange={onSelectFile}
              multiple
              accept="image/png , image/jpeg, image/webp"
            />
          </label>
          <br />
    
          <input type="file" multiple />
    
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
    
          <div className="images">
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