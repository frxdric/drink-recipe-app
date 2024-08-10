import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import cocktail1 from "./assets/midnight opulence.jpg";
import cocktail2 from "./assets/diamond martini.jpg";
import cocktail3 from "./assets/remy_sidecar_card.jpg";
import RecipesList from "./components/RecipesList";
import RecipeForm from "./components/RecipeForm";
import Navbar from "./components/Navbar";
import "./components/navbar.css";
import { RecipeProvider } from "./context/RecipeContext";
import'./components/recipelist.css';
import './components/recipeform.css'

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipesList />} />
            <Route path="/submit-recipe" element={<RecipeForm />} />
          </Routes>
        </div>
      </Router>
    </RecipeProvider>
  );
};

const Home: React.FC = () => (
  <>
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
  </>
);

export default App;
