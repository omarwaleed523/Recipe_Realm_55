// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setRecipes } from "state";
// import RecipeCard from "components/RecipeCard";

// const AllRecipeWidget = () => {
//   const dispatch = useDispatch();
//   const recipes = useSelector((state) => state.recipes);
//   const token = useSelector((state) => state.token);

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/recipes", {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await response.json();
//       dispatch(setRecipes(data));
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <>
//       {recipes.map((recipe) => (
//         <RecipeCard key={recipe._id} recipe={recipe} />
//       ))}
//     </>
//   );
// };

// export default AllRecipeWidget;
