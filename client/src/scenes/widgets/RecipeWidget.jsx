import React, { useState } from "react";
import { TextField, Button, Box, Typography, Select, MenuItem, Modal, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import axios from "axios";

const RecipeForm = () => {
  const [open, setOpen] = useState(false); // State to manage modal open/close
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    ingredients: [],
    ingredientInput: "",
    recipeImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const ingredients = [...prevData.ingredients];
      ingredients[index] = value;
      return {
        ...prevData,
        ingredients,
      };
    });
  };

  const handleIngredientAdd = () => {
    if (formData.ingredientInput.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        ingredients: [...prevData.ingredients, prevData.ingredientInput.trim()],
        ingredientInput: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      recipeImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/recipes", formData);
      console.log("Recipe created:", response.data);
      // Optionally, reset form fields after successful submission
      setFormData({
        name: "",
        type: "",
        description: "",
        ingredients: [],
        ingredientInput: "",
        recipeImage: null,
      });
      setOpen(false); // Close the modal after submission
    } catch (error) {
      console.error("Error creating recipe:", error);
      // Handle error, perhaps display an error message to the user
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Create Recipe
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          padding={2}
          bgcolor="rgba(0, 0, 0, 0.5)" // Semi-transparent background to overlay behind the modal
        >
          <Box
            p={4}
            border={"solid 1px white"}
            bgcolor={"white"}
            borderRadius={5}
            boxShadow={3}
            maxWidth={500} // Limiting the maximum width of the form
          >
            <Box display="flex" justifyContent="flex-end" mb={2}>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            <Typography variant="h5" mb={2}>Create a New Recipe</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                margin="normal"
              />
              <Select
                fullWidth
                label="Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                variant="outlined"
                margin="normal"
                displayEmpty // This will allow an empty display value
              >
                <MenuItem value="" disabled>
                  Select Type
                </MenuItem>
                <MenuItem value="breakfast">Breakfast</MenuItem>
                <MenuItem value="lunch">Lunch</MenuItem>
                <MenuItem value="dinner">Dinner</MenuItem>
              </Select>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
              {formData.ingredients.map((ingredient, index) => (
                <TextField
                  key={index}
                  fullWidth
                  label={`Ingredient ${index + 1}`}
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                  variant="outlined"
                  margin="normal"
                />
              ))}
              <Box display="flex" alignItems="center">
                <TextField
                  label="Ingredient"
                  name="ingredientInput"
                  value={formData.ingredientInput}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  style={{ width: 200 }} // Fixed width for ingredient input
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleIngredientAdd}
                  style={{ marginLeft: "8px" }}
                >
                  Add Ingredient
                </Button>
              </Box>
              <Box display="flex" justifyContent="center" mb={2}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="recipe-image-input"
                />
                <label htmlFor="recipe-image-input">
                  <Box
                    component="div"
                    bgcolor="#e0e0e0"
                    borderRadius={8}
                    p={2}
                    textAlign="center"
                    cursor="pointer"
                    fullWidth
                    height="100px"
                  >
                    Drag & Drop or Click to Upload Image
                  </Box>
                </label>
              </Box>
              <Typography variant="body2" mt={1} mb={2} display="block">
                {formData.recipeImage && formData.recipeImage.name}
              </Typography>
              <Button type="submit" variant="contained" color="primary">
                Create Recipe
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default RecipeForm;
