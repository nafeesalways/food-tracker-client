import React, { useState, use } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import BarcodeScanner from "./BarcodeScanner";
import { FaKeyboard, FaBarcode, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const AddFood = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [inputMode, setInputMode] = useState("manual"); // 'manual' or 'scanner'
  const [productData, setProductData] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    category: "",
    quantity: "",
    expiryDate: "",
    description: "",
  });

  // Handle product scanned from barcode
  const handleProductScanned = (product) => {
    setProductData(product);
    
    // Auto-fill form with scanned data
    setFormData({
      image: product.image || "",
      name: product.name || "",
      category: product.category ? getCategoryFromScanned(product.category) : "",
      quantity: product.quantity || "",
      expiryDate: "",
      description: product.ingredients || "",
    });
    
    toast.info("Product loaded! Please verify and add expiry date.");
  };

  // Map scanned category to our predefined categories
  const getCategoryFromScanned = (scannedCategory) => {
    const categoryMap = {
      dairy: "Dairy",
      meat: "Meat",
      poultry: "Poultry",
      fruit: "Fruit",
      vegetables: "Vegetables",
      snacks: "Snacks",
      beverages: "Beverages",
      bakery: "Bakery",
    };

    const normalized = scannedCategory.toLowerCase();
    for (const [key, value] of Object.entries(categoryMap)) {
      if (normalized.includes(key)) {
        return value;
      }
    }
    return "";
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleAddFood = (e) => {
    e.preventDefault();

    // Validate expiry date is in the future
    const selectedDate = new Date(formData.expiryDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      toast.error("Expiry date cannot be in the past!");
      return;
    }

    const newFood = {
      image: formData.image,
      name: formData.name,
      category: formData.category,
      quantity: formData.quantity,
      expiryDate: new Date(formData.expiryDate),
      description: formData.description,
      addedDate: new Date(),
      userEmail: user.email,
      barcode: productData?.barcode || null, // Store barcode if scanned
      brands: productData?.brands || null,
      nutritionGrade: productData?.nutritionGrade || null,
    };

    axios
      .post("https://food-tracker-server.vercel.app/foods", newFood, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Food item saved successfully! 🎉");
          navigate("/myItems");
        }
      })
      .catch((error) => {
        console.error("Error adding food:", error);
        toast.error("Failed to add food item. Please try again.");
      });
  };

  return (
    <section className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 mt-10 mb-10">
      <Helmet>
        <title>FreshKeep | Add Food</title>
      </Helmet>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-3">
          Add New Food Item
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Track your food inventory and reduce waste
        </p>
      </motion.div>

      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        {/* Input Mode Toggle */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
          <button
            onClick={() => setInputMode("manual")}
            className={`btn flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              inputMode === "manual"
                ? "bg-green-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaKeyboard className="text-lg" /> Manual Entry
          </button>
          <button
            onClick={() => setInputMode("scanner")}
            className={`btn flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              inputMode === "scanner"
                ? "bg-green-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaBarcode className="text-lg" /> Scan Barcode
          </button>
        </div>

        {/* Barcode Scanner Section */}
        {inputMode === "scanner" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <BarcodeScanner onProductScanned={handleProductScanned} />
          </motion.div>
        )}

        {/* Add Food Form */}
        <form onSubmit={handleAddFood} className="space-y-4 sm:space-y-5">
          {/* Image URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleInputChange}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Food Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Food Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter food name (e.g., Fresh Milk)"
              value={formData.name}
              onChange={handleInputChange}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option disabled value="">
                Choose Category
              </option>
              <option>Dairy</option>
              <option>Meat</option>
              <option>Poultry</option>
              <option>Fruit</option>
              <option>Vegetables</option>
              <option>Snacks</option>
              <option>Beverages</option>
              <option>Bakery</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity *
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="e.g., 1kg, 2 packs, 500ml"
              value={formData.quantity}
              onChange={handleInputChange}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expiry Date *
            </label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]} // Prevent past dates
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description / Notes
            </label>
            <textarea
              name="description"
              placeholder="Add any additional notes (ingredients, storage tips, etc.)"
              value={formData.description}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 w-full text-base sm:text-lg font-semibold py-3 shadow-lg hover:shadow-xl"
          >
            Add Food Item
          </button>
        </form>

        {/* Scanned Product Info Display */}
        {productData && productData.name && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl shadow-md"
          >
            <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
              <FaInfoCircle />
              Scanned Product Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-700">
              <p>
                <span className="font-semibold">Brand:</span> {productData.brands}
              </p>
              <p>
                <span className="font-semibold">Barcode:</span>{" "}
                <span className="font-mono">{productData.barcode}</span>
              </p>
              {productData.nutritionGrade !== "N/A" && (
                <p>
                  <span className="font-semibold">Nutrition Grade:</span>{" "}
                  <span
                    className={`font-bold uppercase ${
                      productData.nutritionGrade === "a" || productData.nutritionGrade === "b"
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {productData.nutritionGrade}
                  </span>
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AddFood;
