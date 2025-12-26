import React from "react";

import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import Fridge from "../Pages/Fridge";
import AddFood from "../Pages/AddFood";
import MyItems from "../Pages/MyItems";
import PrivateRoute from "../Provider/PrivateRoute";
import FoodDetails from "../Pages/FoodDetails";
import Features from "../Pages/Features";
import RecipeSuggestions from "../Pages/RecipeSuggestions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/fridge",
        Component: Fridge,
      },
      {
        path: "/features",
        Component: Features,
      },

      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/recipes",
        element: <PrivateRoute><RecipeSuggestions /></PrivateRoute>,
      },
      {
        path: "/foods/:id",
        Component: FoodDetails,
      },
      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
