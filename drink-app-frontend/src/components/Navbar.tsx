import React from 'react';
import styled from 'styled-components';
import { Link } from  'react-router-dom'
import '../index.css'
import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">SipSociety</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/recipes" className="nav-link">Recipes</Link>
        <Link to="/submit-recipe" className="submit">Submit Recipe</Link>
      </nav>
    </header>
  );
};

export default Navbar;