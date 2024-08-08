// src/components/RecipeForm.tsx
import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import './recipeform.css';

const RecipeForm: React.FC = () => {
  const { addRecipe } = useContext(RecipeContext)!;
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    submitterName: '',
    email: '',
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRecipe(formData);
    alert('Recipe submitted successfully!');
    setFormData({
      name: '',
      ingredients: '',
      instructions: '',
      submitterName: '',
      email: '',
      image: ''
    });
  };

  return (
    <div className="recipe-form-container">
      <h2>Submit Your Recipe</h2>
      <form className="recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (separate by commas)"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="submitterName"
          placeholder="Your Name"
          value={formData.submitterName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image Filename (e.g., mojito.jpg)"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
