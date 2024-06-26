import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Popover,
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  Menu,
  Close,
  Home as HomeIcon,
  RssFeed as FeedIcon,
  Dashboard as DashboardIcon,
  Info as AboutIcon,
  RamenDining as RecipeIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import FlexBetween from "components/FlexBetween";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipeType, setSelectedRecipeType] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const isAdmin = user ? `${user.usertype}` : '';

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = user ? `${user.firstName} ${user.lastName}` : '';

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleRecipeTypeChange = (event) => {
    setSelectedRecipeType(event.target.value);
    // You can add logic here to handle the selection
  };

  const handleOurRecipesHoverEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handleOurRecipesHoverLeave = () => {
    setIsPopoverOpen(false);
  };

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          component={Link} to="/LandingPage"
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          RecipeRealm
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton component={Link} to="/LandingPage">
            <HomeIcon sx={{ fontSize: "25px" }} />
            Home
          </IconButton>
          <Box
            onMouseEnter={handleOurRecipesHoverEnter}
            onMouseLeave={handleOurRecipesHoverLeave}
          >
            <IconButton
              aria-describedby="our-recipes-popover"
              sx={{
                "&:hover": {
                  color: primaryLight,
                },
              }}
            >
              <RecipeIcon sx={{ fontSize: "25px", marginRight: "0.5rem" }} />
              Our Recipes
            </IconButton>
            <Popover
              id="our-recipes-popover"
              open={isPopoverOpen}
              anchorEl={anchorEl}
              onClose={() => setIsPopoverOpen(false)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              disableRestoreFocus
            >
              <Box
                p={2}
                onMouseEnter={() => setIsPopoverOpen(true)}
                onMouseLeave={handleOurRecipesHoverLeave}
              >
                <MenuItem component={Link} to="/Breakfast" onClick={() => setIsPopoverOpen(false)}>
                  Breakfast
                </MenuItem>
                <MenuItem component={Link} to="/Lunch" onClick={() => setIsPopoverOpen(false)}>
                  Lunch
                </MenuItem>
                <MenuItem component={Link} to="/Dinner" onClick={() => setIsPopoverOpen(false)}>
                  Dinner
                </MenuItem>
              </Box>
            </Popover>
          </Box>
          <IconButton component={Link} to="/home">
            <FeedIcon sx={{ fontSize: "25px" }} />
            Feed
          </IconButton>
          <IconButton component={Link} to="/About">
            <AboutIcon sx={{ fontSize: "25px" }} />
            About Us
          </IconButton>
          {isAdmin === 'admin' && (
            <IconButton component={Link} to="/Admin">
              <DashboardIcon sx={{ fontSize: "25px" }} />
              Dashboard
            </IconButton>
          )}
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
                Log Out
              </MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
