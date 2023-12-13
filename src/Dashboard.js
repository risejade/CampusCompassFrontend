import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import campusLogo from './CCcss/CCimage/campus.png';
import NavBar from './NavBar';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import './CCcss/AdminHome.css';
import { Paper } from '@mui/material';

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/usercampus/getAllUsercampus');
        const data = await response.json();
        setUserData(data); // Set fetched data to state
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false on error
      }
    };

    fetchData();
  }, []);

  const generatePDF = () => {
    const pdfContent = (
      <Document>
        <Page style={styles.page}>
          <Text style={styles.title}>Users Information Table</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>ID</Text>
              <Text style={styles.tableHeader}>Email</Text>
              <Text style={styles.tableHeader}>First Name</Text>
              <Text style={styles.tableHeader}>Last Name</Text>
              <Text style={styles.tableHeader}>Gender</Text>
              {/* Add more headers for other columns if needed */}
            </View>
            {/* Render table data */}
            {userData.map((user) => (
              <View key={user.sid} style={styles.tableRow}>
                <Text style={styles.tableCell}>{user.sid}</Text>
                <Text style={styles.tableCell}>{user.email}</Text>
                <Text style={styles.tableCell}>{user.fname}</Text>
                <Text style={styles.tableCell}>{user.lname}</Text>
                <Text style={styles.tableCell}>{user.gender}</Text>
                {/* Add more cells for other columns if needed */}
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );

    setPdfData(pdfContent);
  };
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 20,
    },
    title: {
      fontSize: 18,
      marginBottom: 15,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      padding: 5,
    },
    cell: {
      flex: 1,
      textAlign: 'center',
    },
    table: {
        display: 'table',
        width: 'auto',
        marginBottom: 10,
      },
      tableRow: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        padding: 5,
      },
      tableHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      tableCell: {
        flex: 1,
        textAlign: 'center',
      },
    });

  const tableStyle = {
    width: '100%', // Make the table occupy 100% width of its container
    borderCollapse: 'collapse',
    // Add more styles as needed
  };

  const thStyle = {
    backgroundColor: '#4E1E2F',
    color: 'white',
    // Add more styles for table headers
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    // Add more styles for table cells
  };

  const tableTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
    color: '#4E1E2F', // Adjust the color as needed
  };

  const renderTable = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
        <div style={tableTitleStyle}>Users Information Table</div>
        <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Gender</th>
            {/* Add more table headers for other columns if needed */}
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.sid}>
              <td style={tdStyle}>{user.sid}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.fname}</td>
              <td style={tdStyle}>{user.lname}</td>
              <td style={tdStyle}>{user.gender}</td>
              {/* Add more table cells for other columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      );
    }
  };

    const gradientBackground = {
        padding: '20px',
        background: 'linear-gradient(45deg, #4E1E2F -10%, #e6b87b 60%, #fb9918 140%)',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        width: '1440px', // Set the width of the Paper
        height: '565px', // Set the height of the Paper
      };

    const handleDropdownClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleDropdownClose = () => {
      setAnchorEl(null);
    };
  
    const handleItemClick = (item) => {
      // Logic for handling dropdown item clicks
      console.log(`Clicked on: ${item}`);
      handleDropdownClose(); // Close the dropdown after clicking an item
      // You can add further logic based on the item clicked
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
  
    const stopPropagation = (event) => {
      event.stopPropagation();
    };
  
    const handleSearchBldg = () => {
      navigate('/SearchBuilding');
    };
    
    const handleEvents = () => {
      navigate('/Events');
    };

    const handleRedirect = (path) => {
        navigate(path);
      };
  return (
    <div>
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
        <br></br>
    <Paper style={gradientBackground}>
       {renderTable()}
       <Button variant="contained" onClick={generatePDF}>Export to PDF</Button>
        {pdfData && (
          <PDFDownloadLink document={pdfData} fileName="users_information.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
          </PDFDownloadLink>
        )}
        </Paper>
      </div>

  );
}

export default Dashboard;