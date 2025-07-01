import React, { use } from 'react';
import ExpiredCard from './ExpiredCard';

const Expired = ({expiredItemsPromise}) => {
    const expired = use(expiredItemsPromise)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 space-y-3 space-x-3'>
          {
            expired.map(ex=><ExpiredCard key={ex._id} ex={ex}></ExpiredCard>)
          }
        </div>
    );
};

export default Expired;