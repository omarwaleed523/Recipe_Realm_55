// controllers/recipies.js
import Recipe from "../models/recipe.js";

export const createRecipe = async (req, res) => {
  try {
    const { name, type, description, ingredients, recipeImage } = req.body;
    console.log(req.body.recipeImage);
    const newRecipe = new Recipe({
      name,
      type,
      description,
      ingredients,
      recipeImage,
    });
    console.log(newRecipe);
    await newRecipe.save();

    res.status(201).json({ message: "Recipe created successfully", recipe: newRecipe });
   } catch (error) {
     res.status(500).json({ message: "Failed to create recipe", error: error.message });
  }
};
