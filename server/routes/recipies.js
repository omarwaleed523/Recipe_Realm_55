import express from "express";
import { createRecipe, getRecipes, getRecipeById, uploadMiddleware } from "../controllers/recipies.js";
import { deleteRecipe } from "../controllers/recipies.js";

const router = express.Router();

router.post("/", uploadMiddleware, createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById); // Add this route for fetching a single recipe by ID
router.delete("/:id", deleteRecipe);

export default router;