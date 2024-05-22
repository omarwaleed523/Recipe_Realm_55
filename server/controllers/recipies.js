import Recipe from "../models/recipe.js";
import multer from "multer";

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export const uploadMiddleware = upload.single('recipeImage');

export const createRecipe = async (req, res) => {
  try {
    const { name, type, description, ingredients, youtubeLink } = req.body; // Extracting YouTube video link from request body
    const recipeImage = req.file ? req.file.filename : null;

    const newRecipe = new Recipe({
      name,
      type,
      description,
      ingredients,
      recipeImage,
      youtubeLink, 
    });

    await newRecipe.save();

    res.status(201).json({ message: "Recipe created successfully", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ message: "Failed to create recipe", error: error.message });
  }
};

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipes", error: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipe", error: error.message });
  }
};


export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

