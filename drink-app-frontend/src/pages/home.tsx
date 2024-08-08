import React from 'react';
import './index.css';
import cocktail1 from './assets/midnight opulence.jpg';
import cocktail2 from './assets/diamond martini.jpg';
import cocktail3 from './assets/remy_sidecar_card.jpg';
import RecipesList from '../components/RecipesList'
import RecipeForm from '../components/RecipeForm';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">SipSociety</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#recipes">Recipes</a>
          <button className="submit-button">Submit Recipes</button>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>EXPERIENCE THE ART OF COCKTAIL MAKING</h1>
          <p>Find the latest Luxury Cocktails.</p>
        </div>
      </section>

      <section className="featured-cocktails" id="home">
        <h2>Featured Cocktails</h2>
        <div className="cocktail-cards">
          <div className="cocktail-card">
            <img src={cocktail1} alt="Midnight Opulence" />
            <h3>Midnight Opulence</h3>
            <p>A timeless classic with a modern twist.</p>
          </div>
          <div className="cocktail-card">
            <img src={cocktail2} alt="The Diamond Martini" />
            <h3>The Diamond Martini</h3>
            <p>Refreshing and minty, perfect for any occasion.</p>
          </div>
          <div className="cocktail-card">
            <img src={cocktail3} alt="Remy Sidecar" />
            <h3>Remy Sidecar</h3>
            <p>Rich and smooth, a true classic.</p>
          </div>
        </div>
      </section>
    
      <footer>
        <p>&copy; 2024 Luxury Cocktail Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;