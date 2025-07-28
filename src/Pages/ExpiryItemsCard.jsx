import React from 'react';
import { Link } from 'react-router';

const ExpiryItemsCard = ({item}) => {
      const { _id, name, category, quantity, image, expiryDate } = item;

  const formattedDate = new Date(expiryDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
    return (
       <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <img src={image} alt={name} className="h-40 object-cover w-full rounded-xl mb-4" />
      
      <div className="flex-1 space-y-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        <p className="text-sm text-red-500 font-medium">Expiry: {formattedDate}</p>
      </div>
      
      
    </div>
    );
};

export default ExpiryItemsCard;