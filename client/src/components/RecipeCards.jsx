import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';


const ARecipeCard = ({ recipe, onDelete }) => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const isAdmin = user ? `${user.usertype}` : '';

  console.log(isAdmin);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${recipe._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (onDelete) {
        onDelete(recipe._id); // Notify the parent component to update the recipe list
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <Card
      sx={{
        boxShadow: 10,
        border: '0px solid Darkorange',
        borderRadius: 2,
        transition: 'transform 0.3s ease',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.03)',
        }
      }}
    >
      {recipe.recipeImage && (
        <CardMedia
          component="img"
          image={`http://localhost:3001/assets/${recipe.recipeImage}`}
          alt={recipe.name}
          sx={{
            height: '300px',
            width: '100%',
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
          }}
        />
      )}
      <CardContent sx={{ backgroundColor: 'rgb(229,114,28)', color: 'white' }}>
        <Typography variant="h3" component="div">
          {recipe.name}
        </Typography>
        {isAdmin === 'admin' && (
        <Box mt={1}>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            sx={{ marginTop: '1rem' }}
          >
            Delete
          </Button>
        </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ARecipeCard;
