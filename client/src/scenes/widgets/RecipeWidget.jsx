import React, { useState } from "react";
import { TextField, Button, Box, Typography, Select, MenuItem, Modal, IconButton, Fab } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const RecipeForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    ingredients: [],
    ingredientInput: "",
    recipeImage: null,
    youtubeLink: "",
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

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        recipeImage: acceptedFiles[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("type", formData.type);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("ingredients", formData.ingredients);
    formDataToSend.append("youtubeLink", formData.youtubeLink);
    if (formData.recipeImage) {
      formDataToSend.append("recipeImage", formData.recipeImage);
    }

    try {
      const response = await axios.post("http://localhost:3001/recipes", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Recipe created:", response.data);
      setFormData({
        name: "",
        type: "",
        description: "",
        ingredients: [],
        ingredientInput: "",
        recipeImage: null,
        youtubeLink: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "orange",
          '&:hover': {
            bgcolor: "darkorange",
          }
        }}
      >
        <Add />
      </Fab>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          maxHeight="100vh"
          overflow="auto"
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
              <TextField
                fullWidth
                label="YouTube Video Link"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <Box display="flex" justifyContent="center" mb={2}>
                <div {...getRootProps()} style={{ outline: "none" }}>
                  <input {...getInputProps()} accept="image/*" />
                  <Box
                    component="div"
                    bgcolor="darkorange"
                    borderRadius={3}
                    p={4}
                    textAlign="center"
                    cursor="pointer"
                    fullWidth
                    height="100px"
                  >
                    Drag & Drop or Click to Upload Image
                  </Box>
                </div>
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
