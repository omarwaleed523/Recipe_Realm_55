import React, { useState } from 'react';
import Navbar from "scenes/navbar";
import APostsWidget from "scenes/widgets/APostsWidget";
import RecipeList from 'components/RecipeList';
import { useSelector } from "react-redux";
import { Box, useMediaQuery, Button } from "@mui/material";

const AdminBoard = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);
  const { _id, userType } = user;
  console.log(userType);
  const [activeView, setActiveView] = useState('recipes');
  const fullName = user ? `${user.firstName} ${user.lastName}` : '';
  const isAdmin = user ? `${user.userType}` : '';
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
      setSearchQuery(query.toLowerCase());
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div>
        <h1>Hello {fullName}</h1> 

        <Box
          width="100%"
          padding="2rem 6%"
          display="flex"
          flexDirection={isNonMobileScreens ? "row" : "column"}
          gap="2rem"
        >
          {/* Buttons on the left */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isNonMobileScreens ? "flex-start" : "center"}
            width={isNonMobileScreens ? "20%" : "100%"}
          >
            <Button
              variant={activeView === 'recipes' ? 'contained' : 'outlined'}
              onClick={() => setActiveView('recipes')}
              sx={{ marginBottom: '1rem', width: '100%' }}
            >
              Recipes
            </Button>
            <Button
              variant={activeView === 'posts' ? 'contained' : 'outlined'}
              onClick={() => setActiveView('posts')}
              sx={{ width: '100%' }}
            >
              Posts
            </Button>
          </Box>

          {/* Content on the right */}
          <Box
            flexBasis={isNonMobileScreens ? "80%" : "100%"}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {activeView === 'recipes' && (
              <RecipeList searchQuery={searchQuery} />
            )}
            {activeView === 'posts' && (
              <APostsWidget userId={_id}  />
            )}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default AdminBoard;
