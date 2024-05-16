import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {recipe.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Type: {recipe.type}
        </Typography>
        <Typography variant="body2" component="p">
          Description: {recipe.description}
        </Typography>
        <Typography variant="body2" component="p">
          Ingredients: {recipe.ingredients.join(", ")}
        </Typography>
        {recipe.recipeImage && (
          <img src={recipe.recipeImage} alt="Recipe" style={{ maxWidth: "100%", marginTop: "10px" }} />
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
