import React, { use } from 'react';
import ExpiryItemsCard from './ExpiryItemsCard';

const ExpiryItems = ({itemsPromise}) => {
    const items = use(itemsPromise)
    return (
        <div>
          {
            items.map(item=><ExpiryItemsCard key={item._id} item={item}></ExpiryItemsCard>)
          }
        </div>
    );
};

export default ExpiryItems;