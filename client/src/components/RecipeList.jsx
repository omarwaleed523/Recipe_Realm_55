import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Container, Typography, Snackbar, Alert } from '@mui/material';
import RecipeCard from 'components/RecipeCards';
import { Link } from 'react-router-dom';

const ARecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = (recipeId) => {
    setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
    setMessage('Recipe deleted successfully');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Recipes
      </Typography>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`} style={{ textDecoration: 'none' }}>
            <RecipeCard recipe={recipe} onDelete={handleDelete} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ARecipeList;
