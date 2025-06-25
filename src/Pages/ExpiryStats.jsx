import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";

const ExpiryStats = () => {
  const [expiredCount, setExpiredCount] = useState(0);
  const [nearlyExpiredCount, setNearlyExpiredCount] = useState(0);

  useEffect(() => {
    // Fetch expired items count
    axios.get("https://food-tracker-server.vercel.app/expiredItems").then((res) => {
      setExpiredCount(res.data.length);
    });

    // Fetch nearly expiry items count
    axios.get("https://food-tracker-server.vercel.app/items").then((res) => {
      setNearlyExpiredCount(res.data.length);
    });
  }, []);

  return (
    <section className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
      <div className="card bg-red-100 shadow-lg p-6">
        <h2 className="text-xl font-semibold text-red-800">Expired Items</h2>
        <p className="text-5xl text-red-600 font-bold mt-2">
          <CountUp end={expiredCount} duration={2} />
        </p>
      </div>
      <div className="card bg-yellow-100 shadow-lg p-6">
        <h2 className="text-xl font-semibold text-yellow-800">Nearly Expiring (5 days)</h2>
        <p className="text-5xl text-yellow-600 font-bold mt-2">
          <CountUp end={nearlyExpiredCount} duration={2} />
        </p>
      </div>
    </section>
  );
};

export default ExpiryStats;
