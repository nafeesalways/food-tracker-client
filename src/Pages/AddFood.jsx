import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";


import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const AddFood = () => {

  const { user } = use(AuthContext);
  console.log('token in the context',user.accessToken)
  const navigate = useNavigate()
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const newFood = {
      image: form.image.value,
      name: form.name.value,
      category: form.category.value,
      quantity: form.quantity.value,
      expiryDate: new Date(form.expiryDate.value),
      description: form.description.value,
      addedDate: new Date(),
      userEmail: user.email,

    };
    axios
      .post("https://food-tracker-server.vercel.app/foods", newFood,{
        headers:{
          Authorization:`Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res)
        if (res.data.insertedId) {
          toast.success("This new Food has been saved");
          navigate('/myItems')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="max-w-3xl mb-7 mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <Helmet>
        <title>FreshKeep | AddFood</title>
      </Helmet>
      <h2 className="text-2xl font-semibold text-success mb-4">Add New Food Item</h2>
      <form onSubmit={handleAddFood} className="space-y-4">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Food Title"
          className="input input-bordered w-full"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option disabled selected>
            Choose Category
          </option>
          <option>Dairy</option>
          <option>Meat</option>
          <option>Poultry</option>
          <option>Fruit</option>
          <option>Vegetables</option>
          <option>Snacks</option>
        </select>

        <input
          type="text"
          name="quantity"
          placeholder="Quantity (e.g. 1kg, 2 packs)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="expiryDate"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows="4"
        ></textarea>

        <button
          
          type="submit"
          className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition w-full"
        >
          Add Food
        </button>
      </form>
    </section>
  );
};

export default AddFood;
