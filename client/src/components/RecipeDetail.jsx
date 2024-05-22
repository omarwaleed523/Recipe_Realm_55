// components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import Navbar from "scenes/navbar";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <>
      <Navbar />
      <Container>
        <Card
          sx={{
            marginTop: '50px',
            boxShadow: 10,
            border: '0px solid orange',
            borderRadius: 2,
            marginBottom: '20px', // Add margin to separate card and video
            width: '100%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {recipe.recipeImage && (
                <CardMedia
                  component="img"
                  image={`http://localhost:3001/assets/${recipe.recipeImage}`}
                  alt={recipe.name}
                  sx={{
                    height: '500px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                  }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {recipe.name}
                </Typography>
                <Typography variant="h5" color="">
                  <strong>Description:</strong> {recipe.description}
                </Typography>
                <Typography variant="h5" color="">
                  <strong>Type:</strong> {recipe.type}
                </Typography>
                <Typography variant="h5" color="">
                  <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                </Typography>
              </CardContent>
              {/* Embed YouTube video */}
              {recipe.youtubeLink && (
                <div style={{ padding: '0 10px'  }}>
                  <iframe
                    title="YouTube Video"
                    width="100%"
                    height="250px"
                    src={`https://www.youtube.com/embed/${extractYouTubeVideoId(recipe.youtubeLink)}`}
                    frameBorder="0"
                    allowFullScreen
                    
                  ></iframe>
                </div>
              )}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

// Function to extract YouTube video ID from URL
const extractYouTubeVideoId = (url) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w\d_-]{11})/);
  return match ? match[1] : null;
};

export default RecipeDetail;
