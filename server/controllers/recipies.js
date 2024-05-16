import Recipe from "../models/recipe.js";
import multer from "multer";

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets');
  },
  filename: (req, file, cb) => {
   
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

export const uploadMiddleware = upload.single('recipeImage');

export const createRecipe = async (req, res) => {
  try {
    const { name, type, description, ingredients } = req.body;
    const recipeImage = req.file ? req.file.filename : null;
    console.log(req.file);

    const newRecipe = new Recipe({
      name,
      type,
      description,
      ingredients,
      recipeImage,
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
