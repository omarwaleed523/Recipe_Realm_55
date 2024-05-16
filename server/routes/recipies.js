import express from "express";
import { createRecipe, getRecipes, uploadMiddleware } from "../controllers/recipies.js";

const router = express.Router();

router.post("/", uploadMiddleware, createRecipe);
router.get("/", getRecipes);

export default router;
