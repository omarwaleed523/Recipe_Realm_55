// scenes/LandingPage/LandingPage.js
import React from "react";
import Navbar from "scenes/navbar";
import RecipeWidget from "scenes/widgets/RecipeWidget";
import RecipeList from 'components/RecipeList';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div className="header">
                <div className="header-content">
                    <h2>Welcome To Your World of Recipes</h2>
                    <p>Welcome to our recipe sharing community, where you can discover an array of mouthwatering dishes contributed by food enthusiasts worldwide, inspiring your culinary journey with diverse flavors and cooking inspirations!</p>
                </div>
            </div>
            <div className="form-container">
                <RecipeWidget /> 
                <RecipeList />
            </div>
        </div>
    );
}

export default LandingPage;
