import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeCard = ({ recipe }) => {
  return (
    <Card
      sx={{
        boxShadow: 10, // Adds a shadow
        border: '2px solid orange', // Adds an orange outline
        borderRadius: 2, // Makes the card more rounded
        '&:hover': {
          boxShadow: 6, // Increase shadow on hover
        }
      }}
    >
      {recipe.recipeImage && (
        <CardMedia
          component="img"
          image={`http://localhost:3001/assets/${recipe.recipeImage}`}
          alt={recipe.name}
          sx={{
            height: '300px', // Allow image to scale
            width: '100%', // Ensure image takes the full width of the container
            objectFit: 'cover', // Ensure the image covers the entire container
            borderTopLeftRadius: '8px', // Ensures the top left radius of the image matches the card
            borderTopRightRadius: '8px' // Ensures the top right radius of the image matches the card
          }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {recipe.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Type: {recipe.type}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Ingredients: {recipe.ingredients.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
