// routes/recipeRoutes.js
import express from "express";
import { createRecipe } from "../controllers/recipies.js";

const router = express.Router();

router.post("/", createRecipe);

export default router;
