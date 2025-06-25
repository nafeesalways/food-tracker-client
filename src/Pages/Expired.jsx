import React, { use } from 'react';
import ExpiredCard from './ExpiredCard';

const Expired = ({expiredItemsPromise}) => {
    const expired = use(expiredItemsPromise)
    return (
        <div className='grid lg:grid-cols-2 space-y-3 space-x-3'>
          {
            expired.map(ex=><ExpiredCard key={ex._id} ex={ex}></ExpiredCard>)
          }
        </div>
    );
};

export default Expired;