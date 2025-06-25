import React from 'react';
import { Link } from 'react-router';

const ExpiredCard = ({ex}) => {
    const {_id, name, category, quantity, image, expiryDate } = ex;

  const formattedDate = new Date(expiryDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
    return (
        <div className="bg-white border border-red-300 rounded-2xl p-4 shadow-md flex flex-col">
      <img
        src={image}
        alt={name}
        className="h-40 object-cover w-full rounded-xl mb-4"
      />
      
      <div className="flex-1 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800 text-center">{name}</h2>
        <p className="text-sm text-gray-600 text-center">Category: {category}</p>
        <p className="text-sm text-gray-600 text-center">Quantity: {quantity}</p>
        <p className="text-sm text-red-600 font-medium text-center">
          Expired on: {formattedDate}
        </p>
      </div>

      <span className="mt-4 mx-auto inline-block bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold rounded-full w-fit">
        Expired
      </span>

       <Link
        to={`/foods/${_id}`}
        className="mt-4 flex p-3 items-center justify-center text-center bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
      >
        See Details
      </Link>
   
    </div>
    );
};

export default ExpiredCard;