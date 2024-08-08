import React, { createContext, useState, ReactNode } from 'react';

type Recipe = {
  name: string;
  ingredients: string;
  instructions: string;
  submitterName?: string;
  email?: string;
  image: string;
};

type RecipeContextType = {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
};

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      name: 'Midnight Opulence',
      ingredients: 'Vodka, Blue Curacao, Cranberry Juice',
      instructions: 'Shake ingredients with ice and strain into a chilled glass.',
      image: '../assets/',
    },
    {
      name: 'Diamond Martini',
      ingredients: 'Gin, Dry Vermouth, Olive',
      instructions: 'Stir ingredients with ice, strain into a martini glass, garnish with an olive.',
      image: 'diamond martini.jpg',
    },
    {
      name: 'Remy Sidecar',
      ingredients: 'Cognac, Cointreau, Lemon Juice',
      instructions: 'Shake ingredients with ice and strain into a sugar-rimmed glass.',
      image: 'remy sidecar..jpg',
    },
    {
        name: 'Old Fashioned',
        ingredients: 'Bourbon, Sugar, Angostura Bitters, Orange Twist',
        instructions: 'Muddle sugar with bitters in a glass, add bourbon and ice, stir gently and garnish with an orange twist.',
        image: 'Old-Fashioned.webp',
      },
      {
        name: 'French 75',
        ingredients: 'Gin, Lemon Juice, Simple Syrup, Champagne',
        instructions: 'Shake gin, lemon juice, and syrup with ice, strain into a flute, and top with champagne.',
        image: 'french 75.webp',
      },
      {
        name: 'Negroni',
        ingredients: 'Gin, Campari, Sweet Vermouth',
        instructions: 'Stir ingredients with ice, strain into a rocks glass with ice, and garnish with an orange slice.',
        image: 'negroni.webp',
      },
      {
        name: 'Mojito',
        ingredients: 'White Rum, Lime Juice, Sugar, Mint Leaves, Soda Water',
        instructions: 'Muddle mint and sugar in a glass, add rum and lime juice, top with soda water, and garnish with mint sprig.',
        image: 'mojitoo.jpg',
      },
      {
        name: 'Espresso Martini',
        ingredients: 'Vodka, Coffee Liqueur, Fresh Espresso',
        instructions: 'Shake ingredients with ice, strain into a chilled martini glass, and garnish with coffee beans.',
        image: 'espresso martini.webp',
      },
      {
        name: 'Aviation',
        ingredients: 'Gin, Maraschino Liqueur, Crème de Violette, Lemon Juice',
        instructions: 'Shake ingredients with ice, strain into a chilled glass, and garnish with a cherry.',
        image: 'aviation.jfif',
      },
      {
        name: 'Manhattan',
        ingredients: 'Rye Whiskey, Sweet Vermouth, Angostura Bitters, Cherry',
        instructions: 'Stir ingredients with ice, strain into a chilled glass, and garnish with a cherry.',
        image: 'manhattan drink.jpg',
      },
  ]);

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
