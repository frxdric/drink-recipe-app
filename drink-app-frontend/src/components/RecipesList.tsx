import { FC, useEffect, useState } from "react";

const RecipesList: FC = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipe", {
      body: null,
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return <div>{recipes.map((recipe)=> {
    return (<div>{recipe.ingredient}</div>)
  })}</div>;
};

export default RecipesList;
