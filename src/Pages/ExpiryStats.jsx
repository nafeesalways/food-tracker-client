import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExpiryStats = () => {
  const [expiredCount, setExpiredCount] = useState(0);
  const [nearlyExpiredCount, setNearlyExpiredCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://food-tracker-server.vercel.app/expiredItems")
      .then((res) => setExpiredCount(res.data.length));

    axios
      .get("https://food-tracker-server.vercel.app/items")
      .then((res) => setNearlyExpiredCount(res.data.length));
  }, []);

  const data = [
    { name: "Expired", value: expiredCount },
    { name: "Nearly Expiring (5 days)", value: nearlyExpiredCount },
  ];

  const COLORS = ["#ef4444", "#4E61D3"];

  return (
    <section className="p-6 max-w-3xl mx-auto text-center py-10 my-7 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Food Expiry Overview
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(1)}%`
              }
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ExpiryStats;
