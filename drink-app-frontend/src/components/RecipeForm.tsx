import { FC, useState, useEffect } from "react";

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

export default RecipeForm;
