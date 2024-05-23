// App.js
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import AdminBoard from "./scenes/adminDashboard/adminBoard";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import LandingPage from "scenes/LandingPage/LandingPage";
import RecipeDetail from "components/RecipeDetail";
import About from "Aboutus/About";
import Breakfast from "OurRecipes/Breakfast";
import Lunch from "OurRecipes/Lunch";
import Dinner from "OurRecipes/Dinner";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
              path="/LandingPage"
              element={isAuth ? <LandingPage /> : <Navigate to="/" />}
            />
            <Route
              path="/About"
              element={isAuth ? <About /> : <Navigate to="/" />}
            />
             <Route
              path="/admin"
              element={isAuth ? <AdminBoard /> : <Navigate to="/" />}
            />
            <Route
              path="/Breakfast"
              element={isAuth ? <Breakfast /> : <Navigate to="/" />}
            />
            <Route
              path="/Dinner"
              element={isAuth ? <Dinner /> : <Navigate to="/" />}
            />
            <Route
              path="/Lunch"
              element={isAuth ? <Lunch /> : <Navigate to="/" />}
            />
            <Route
              path="/recipes/:id"
              element={isAuth ? <RecipeDetail /> : <Navigate to="/" />}
            />
            <Route path="/admin" element={<AdminBoard />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Breakfast" element={<Breakfast />} />
            <Route path="/Lunch" element={<Lunch />} />
            <Route path="/Dinner" element={<Dinner />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
