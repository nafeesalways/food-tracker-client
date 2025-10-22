import React from "react";
import { Link } from "react-router";
import { FaClock, FaBoxOpen, FaTag } from "react-icons/fa";

const ExpiryItemsCard = ({ item }) => {
  const { _id, name, category, quantity, image, expiryDate } = item;

  const formattedDate = new Date(expiryDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-100 hover:border-green-300">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[200px]">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 line-clamp-1">
            {name}
          </h2>

          <div className="text-gray-600 text-sm space-y-1 mt-2">
            <p className="flex items-center gap-2">
              <FaTag className="text-green-500" />
              <span>Quantity: {quantity}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaClock className="text-red-500" />
              <span>
                Expiry: <span className="font-medium text-red-600">{formattedDate}</span>
              </span>
            </p>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          to={`/food/${_id}`}
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-semibold transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ExpiryItemsCard;
