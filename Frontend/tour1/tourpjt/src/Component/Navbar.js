// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/favorites">Favourites</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/status">Status</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
