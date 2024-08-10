import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import './recipelist.css';


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

const RecipesList: React.FC = () => {
  const { recipes } = useContext(RecipeContext)!;
  
  const predefinedRecipes = [
    { name: 'Midnight Opulence', ingredients: 'Vodka, Blue Curacao, Cranberry Juice', instructions: 'Shake ingredients with ice and strain into a chilled glass.', image: midnightOpulence },
    { name: 'Diamond Martini', ingredients: 'Gin, Dry Vermouth, Olive', instructions: 'Stir ingredients with ice, strain into a martini glass, garnish with an olive.', image: diamondMartini },
    { name: 'Remy Sidecar', ingredients: 'Cognac, Cointreau, Lemon Juice', instructions: 'Shake ingredients with ice and strain into a sugar-rimmed glass.', image: remySidecar },
    { name: 'Old Fashioned', ingredients: 'Bourbon, Sugar, Angostura Bitters, Orange Twist', instructions: 'Muddle sugar with bitters in a glass, add bourbon and ice, stir gently and garnish with an orange twist.', image: oldFashioned },
    { name: 'French 75', ingredients: 'Gin, Lemon Juice, Simple Syrup, Champagne', instructions: 'Shake gin, lemon juice, and syrup with ice, strain into a flute, and top with champagne.', image: french75 },
    { name: 'Negroni', ingredients: 'Gin, Campari, Sweet Vermouth', instructions: 'Stir ingredients with ice, strain into a rocks glass with ice, and garnish with an orange slice.', image: negroni },
    { name: 'Mojito', ingredients: 'White Rum, Lime Juice, Sugar, Mint Leaves, Soda Water', instructions: 'Muddle mint and sugar in a glass, add rum and lime juice, top with soda water, and garnish with mint sprig.', image: mojito },
    { name: 'Espresso Martini', ingredients: 'Vodka, Coffee Liqueur, Fresh Espresso', instructions: 'Shake ingredients with ice, strain into a chilled martini glass, and garnish with coffee beans.', image: espressoMartini },
    { name: 'Aviation', ingredients: 'Gin, Maraschino Liqueur, Crème de Violette, Lemon Juice', instructions: 'Shake ingredients with ice, strain into a chilled glass, and garnish with a cherry.', image: aviation },
    { name: 'Manhattan', ingredients: 'Rye Whiskey, Sweet Vermouth, Angostura Bitters, Cherry', instructions: 'Stir ingredients with ice, strain into a chilled glass, and garnish with a cherry.', image: manhattan },
  ];

  const userSubmittedRecipes = recipes.slice(predefinedRecipes.length); // Ensure slicing starts after predefined recipes

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