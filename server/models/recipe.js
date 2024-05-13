import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["breakfast", "lunch", "dinner"],
      required: true,
    },
    description: String,
    ingredients: {
      type: [String],
      required: true,
    },
    recipeImage: String, 
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
