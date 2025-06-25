import React from 'react';

const StorageTips = () => {
    return (
       <section>
        <h2 className="text-3xl font-bold text-center mb-10 mt-10">Smart Storage Tips to Prevent Waste</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">🧊</div>
            <h3 className="text-xl font-semibold mb-2">Freeze Smart</h3>
            <p className="text-sm text-gray-600">
              Freeze leftovers in airtight containers and label with dates. Keeps food safe for up to 3 months.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">🥬</div>
            <h3 className="text-xl font-semibold mb-2">Use Crisper Wisely</h3>
            <p className="text-sm text-gray-600">
              Leafy greens last longer in perforated bags in the crisper drawer. Wash only before use.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">🥫</div>
            <h3 className="text-xl font-semibold mb-2">FIFO Rule</h3>
            <p className="text-sm text-gray-600">
              First In, First Out — always consume older items first. Rotate pantry stock every 2 weeks.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">⏱️</div>
            <h3 className="text-xl font-semibold mb-2">Label Everything</h3>
            <p className="text-sm text-gray-600">
              Use FreshKeep to label opened items with “opened on” dates to avoid surprise spoilage.
            </p>
          </div>
        </div>
      </section>
    );
};

export default StorageTips;