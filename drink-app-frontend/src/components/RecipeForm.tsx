
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
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        image: e.target.files[0], 
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      const newRecipe = {
        ...formData,
        image: reader.result as string,
      };
      addRecipe(newRecipe); 
      alert('Recipe submitted successfully!');
      setFormData({
        name: '',
        ingredients: '',
        instructions: '',
        submitterName: '',
        email: '',
        image: null,
      });
    };
    if (formData.image) {
      reader.readAsDataURL(formData.image);
    } else {
      
      addRecipe({
        ...formData,
        image: null, 
      });
      setFormData({
        name: '',
        ingredients: '',
        instructions: '',
        submitterName: '',
        email: '',
        image: null,
      });
    }
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
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {formData.image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(formData.image)} alt="Image Preview" />
          </div>
        )}
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
