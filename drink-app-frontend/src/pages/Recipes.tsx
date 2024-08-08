import React, { useState } from 'react';
import '../components/recipelist.css'; 

type Recipe = {
  name: string;
  ingredients: string;
  instructions: string;
  submitterName?: string;
  email?: string;
};

const initialRecipes: Recipe[] = [
  {
    name: 'Midnight Opulence',
    ingredients: 'Vodka, Blue Curacao, Cranberry Juice',
    instructions: 'Shake ingredients with ice and strain into a chilled glass.',
  },
  {
    name: 'Diamond Martini',
    ingredients: 'Gin, Dry Vermouth, Olive',
    instructions: 'Stir ingredients with ice, strain into a martini glass, garnish with an olive.',
  },
  {
    name: 'Remy Sidecar',
    ingredients: 'Cognac, Cointreau, Lemon Juice',
    instructions: 'Shake ingredients with ice and strain into a sugar-rimmed glass.',
  },
  {
    name: 'Old Fashioned',
    ingredients: 'Bourbon, Sugar, Angostura Bitters, Orange Twist',
    instructions: 'Muddle sugar with bitters in a glass, add bourbon and ice, stir gently and garnish with an orange twist.',
  },
  {
    name: 'French 75',
    ingredients: 'Gin, Lemon Juice, Simple Syrup, Champagne',
    instructions: 'Shake gin, lemon juice, and syrup with ice, strain into a flute, and top with champagne.',
  },
  {
    name: 'Negroni',
    ingredients: 'Gin, Campari, Sweet Vermouth',
    instructions: 'Stir ingredients with ice, strain into a rocks glass with ice, and garnish with an orange slice.',
  },
  {
    name: 'Mojito',
    ingredients: 'White Rum, Lime Juice, Sugar, Mint Leaves, Soda Water',
    instructions: 'Muddle mint and sugar in a glass, add rum and lime juice, top with soda water, and garnish with mint sprig.',
  },
  {
    name: 'Espresso Martini',
    ingredients: 'Vodka, Coffee Liqueur, Fresh Espresso',
    instructions: 'Shake ingredients with ice, strain into a chilled martini glass, and garnish with coffee beans.',
  },
  {
    name: 'Aviation',
    ingredients: 'Gin, Maraschino Liqueur, Crème de Violette, Lemon Juice',
    instructions: 'Shake ingredients with ice, strain into a chilled glass, and garnish with a cherry.',
  },
  {
    name: 'Manhattan',
    ingredients: 'Rye Whiskey, Sweet Vermouth, Angostura Bitters, Cherry',
    instructions: 'Stir ingredients with ice, strain into a chilled glass, and garnish with a cherry.',
  },
];

const RecipesList: React.FC = () => {
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  const addUserRecipe = (recipe: Recipe) => {
    setUserRecipes([...userRecipes, recipe]);
  };

  return (
    <div className="recipes-list">
      <h2>Our Recipes</h2>
      <div className="recipe-cards">
        {initialRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
      <h2>User-Submitted Recipes</h2>
      <div className="recipe-cards">
        {userRecipes.length > 0 ? (
          userRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
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
