
import React, { createContext, useState, ReactNode } from 'react';

type Recipe = {
  name: string;
  ingredients: string;
  instructions: string;
  submitterName?: string;
  email?: string;
  image?: string; 
};

type RecipeContextType = {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
};

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    
  ]);

  const addRecipe = (recipe: Recipe) => {
    setRecipes(prevRecipes => [...prevRecipes, recipe]); // Add new recipe to the state
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
