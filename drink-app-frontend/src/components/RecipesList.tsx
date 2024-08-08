import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import './recipelist.css';

// drink Images 
import midnightOpulence from '../assets/midnight opulence.jpg';
import diamondMartini from '../assets/diamond martini.jpg';
import remySidecar from '../assets/remy sidecar..jpg';
import oldFashioned from '../assets/Old-Fashioned.webp';
import french75 from '../assets/french 75.webp';
import negroni from '../assets/negroni.webp';
import mojito  from '../assets/mojitoo.jpg';
import espressoMartini  from '../assets/espresso martini.webp';
import aviation from '../assets/aviation.jfif';
import manhattan  from '../assets/manhattan drink.jpg';

// src/components/RecipesList.tsx
const RecipesList: React.FC = () => {
  const { recipes } = useContext(RecipeContext)!;

  const predefinedRecipes = recipes.slice(0, 3);
  const userSubmittedRecipes = recipes.slice(3);

  return (
    <div className="recipes-list">
      <h2>Our Recipes</h2>
      <div className="recipe-cards">
        {predefinedRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
      <h2>User-Submitted Recipes</h2>
      <div className="recipe-cards">
        {userSubmittedRecipes.length > 0 ? (
          userSubmittedRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              {recipe.submitterName && <p><strong>Submitted by:</strong> {recipe.submitterName}</p>}
            </div>
          ))
        ) : (
          <p>No user-submitted recipes yet. Be the first to submit!</p>
        )}
      </div>
    </div>
  );
};


export default RecipesList;
