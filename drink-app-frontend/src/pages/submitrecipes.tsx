import React from 'react';
import { FC, useState, useEffect } from "react";
import '../components/'

const RecipeForm: FC = () => {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setDes] = useState(0);
  
  const submitRecipes = () => {
    fetch("http://localhost:3000/recipe", {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ingredient,
        quantity,
      }),
      method: "POST",
    });
  };

  return (
    <div>
      <input
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <input value={quantity} onChange={(e) => setDes(+e.target.value || 1)} />
      <button onClick={submitRecipes}>Submit</button>
    </div>
  );
};

const submitrecipes: React.FC = () => {
  return (
    <div>
      <h1>Submit a Recipe</h1>
      <form>
        <div>
          <label>Recipe Name:</label>
          <input type="text" name="recipeName" />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea name="ingredients" />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea name="instructions" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default submitrecipes;
