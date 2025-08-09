import React, { useEffect, useState, use } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const Fridge = () => {
  const [foods, setFoods] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { user } = use(AuthContext);

  useEffect(() => {
    handleFilter("All");
  }, []);

  const handleFilter = (cat) => {
    setCategory(cat);
    axios
      .get(`https://food-tracker-server.vercel.app/foodsCategory/?category=${cat}`)
      .then((res) => {
        setFoods(res.data);
        setCurrentPage(1); // Reset to first page when filtering
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = () => {
    axios
      .get(
        `https://food-tracker-server.vercel.app/fridge-foods?&search=${searchText}`
      )
      .then((res) => {
        setFoods(res.data);
        setCurrentPage(1); // Reset to first page when searching
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get(`https://food-tracker-server.vercel.app/foods`)
      .then((res) => setFoods(res.data))
      .catch((err) => console.error(err));
  }, [user]);

  const isExpired = (expiryDate) => new Date(expiryDate) < new Date();

  // Pagination logic
  const totalPages = Math.ceil(foods.length / itemsPerPage);
  const paginatedFoods = foods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <Helmet>
        <title>FreshKeep | Fridge</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center">My Fridge</h2>
      <div className="flex justify-center mb-7 flex-wrap gap-3">
        <select
          className="select select-bordered"
          value={category}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruit">Fruit</option>
          <option value="Poultry">Poultry</option>
          <option value="Meat">Meat</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Snacks">Snacks</option>
        </select>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          type="text"
          placeholder="Type here"
          className="input input-ghost"
        />
        <button
          onClick={handleSearch}
          className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Search
        </button>
      </div>
      {paginatedFoods.length === 0 ? (
        <p className="text-center text-gray-500">No food items found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paginatedFoods.map((item) => (
              <div key={item._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.name}
                    {isExpired(item.expiryDate) && (
                      <div className="badge badge-error ml-2">Expired</div>
                    )}
                  </h2>
                  <p>
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <p>
                    <strong>Expiry:</strong>{" "}
                    {new Date(item.expiryDate).toLocaleDateString()}
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/foods/${item._id}`}
                      className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition w-full"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <button
                className="btn btn-sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`btn btn-sm ${
                    currentPage === i + 1 ? "btn-primary" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="btn btn-sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Fridge;
