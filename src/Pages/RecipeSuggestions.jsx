import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUtensils, FaClock, FaFire } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";

const RecipeSuggestions = () => {
  const { user } = use(AuthContext); // Get logged-in user
  const [expiringItems, setExpiringItems] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Fetch ONLY the logged-in user's expiring items
  useEffect(() => {
    if (user) {
      // Fetch user's items from the main foods collection
      axios
        .get(`https://food-tracker-server.vercel.app/foods?userEmail=${user.email}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => {
          // Filter items expiring within 5 days
          const today = new Date();
          const fiveDaysLater = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);
          
          const expiringSoon = res.data.filter((item) => {
            const expiryDate = new Date(item.expiryDate);
            return expiryDate >= today && expiryDate <= fiveDaysLater;
          });
          
          setExpiringItems(expiringSoon);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  // Generate recipe suggestions based on expiring ingredients
  const generateRecipes = async () => {
    if (expiringItems.length === 0) {
      toast.error("No expiring items found to generate recipes!");
      return;
    }

    setLoading(true);
    
    // Extract ingredient names from expiring items
    const ingredients = expiringItems.map((item) => item.name).join(",");
    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: {
            apiKey: API_KEY,
            ingredients: ingredients,
            number: 6, // Number of recipes to return
            ranking: 2, // Minimize missing ingredients
            ignorePantry: true,
          },
        }
      );
      
      setRecipes(response.data);
      toast.success(`Found ${response.data.length} recipes!`);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      toast.error("Failed to fetch recipes. Check your API key.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch detailed recipe information
  const fetchRecipeDetails = async (recipeId) => {
    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
    
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information`,
        {
          params: {
            apiKey: API_KEY,
          },
        }
      );
      setSelectedRecipe(response.data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      toast.error("Failed to fetch recipe details.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10">
      <Helmet>
        <title>FreshKeep | Recipe Suggestions</title>
      </Helmet>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
           Smart Recipe Suggestions
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-2">
          Don't let your food go to waste! Get personalized recipe ideas based on
          YOUR ingredients that are about to expire.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Logged in as: <span className="font-semibold text-green-700">{user?.email}</span>
        </p>
        
        {/* Generate Recipes Button */}
        <button
          onClick={generateRecipes}
          disabled={loading || expiringItems.length === 0}
          className="btn bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-xl transition disabled:opacity-50"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Generate Recipe Ideas"
          )}
        </button>
      </motion.div>

      {/* Expiring Ingredients Display */}
      {expiringItems.length > 0 ? (
        <div className="mb-10 bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-orange-700 mb-3 flex items-center gap-2">
            <FaClock /> Your Items Expiring Soon (Next 5 Days):
          </h3>
          <div className="flex flex-wrap gap-2">
            {expiringItems.map((item) => (
              <span
                key={item._id}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-orange-200"
              >
                {item.name} - Expires: {new Date(item.expiryDate).toLocaleDateString()}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-10 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-blue-700 font-medium">
             Great news! You don't have any items expiring within the next 5 days.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Add more items to your inventory to get personalized recipe suggestions.
          </p>
        </div>
      )}

      {/* Recipe Cards Grid */}
      {recipes.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Recipe Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {recipe.usedIngredientCount} ingredients
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {recipe.title}
                </h3>

                {/* Ingredient Stats */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p className="flex items-center gap-2">
                    <span className="text-green-600 font-semibold">✓</span>
                    Used: {recipe.usedIngredientCount} ingredients
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-orange-600 font-semibold">⚠</span>
                    Missing: {recipe.missedIngredientCount} ingredients
                  </p>
                </div>

                {/* View Recipe Button */}
                <button
                  onClick={() => {
                    fetchRecipeDetails(recipe.id);
                    document.getElementById("recipe_modal").showModal();
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                >
                  View Recipe
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Recipe Details Modal */}
      <dialog id="recipe_modal" className="modal">
        <div className="modal-box max-w-3xl bg-white">
          {selectedRecipe && (
            <div>
              {/* Close Button */}
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              {/* Recipe Header */}
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedRecipe.title}
              </h2>

              {/* Recipe Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock className="text-green-600" />
                  <span className="font-medium">{selectedRecipe.readyInMinutes} mins</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUtensils className="text-green-600" />
                  <span className="font-medium">{selectedRecipe.servings} servings</span>
                </div>
              </div>

              {/* Ingredients List */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ingredients:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedRecipe.extendedIngredients?.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Instructions:
                </h3>
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: selectedRecipe.instructions || "No instructions available.",
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default RecipeSuggestions;
