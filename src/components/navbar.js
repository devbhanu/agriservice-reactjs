import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './searchtype';


function Navbar() {
  const navStyle = {
    textDecoration: 'none',
    color: 'green',
    fontSize: 30,
    padding: '0 10px', // Add padding to each link for spacing
  };

  const ulStyle = {
    textDecoration: 'none',
    // backgroundColor: 'yellow',
    listStyleType: 'none', // Remove bullet points
    display: 'flex', // Display list items horizontally
    alignItems: 'center', // Align items vertically in the center
    padding: '0', // Remove default padding
    margin: '0', // Remove default margin
    width: '50%', // Set a width to center the list
    justifyContent: 'space-between', // Distribute space evenly between list items
  };

  const navbarStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'space-between', // Distribute space evenly between children
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div style={navbarStyle}>
      <h1>Test website</h1>
        <Searchbar />
      <ul style={ulStyle}>
        <li><Link to="/" style={navStyle}>Home</Link></li>
        <li><Link to="/about" style={navStyle}>About Us</Link></li>
        <li><Link to="/contact" style={navStyle}>Contact</Link></li>
        <li><Link to="/services" style={navStyle}>Services</Link></li>
        <li><Link to="/dynamic" style={navStyle}>Dynamics</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
