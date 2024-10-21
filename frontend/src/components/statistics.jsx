import React, { useEffect, useState } from "react";

const Statistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(`https://roxiler-assignment-backend.vercel.app/api/statistics?month=${selectedMonth}`);
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div className="pb-5">
      <h2 className="text-4xl font-semibold text-gray-800 text-center my-5">Statistics - {selectedMonth}</h2>
      <div className="flex justify-center my-5">
        <div className="card">
          <div className="flex flex-row flex-wrap gap-5 justify-between">
            <div className="text-gray-600 font-medium">
              <h3>Total Sale Amount:</h3>
              <h3>Total Sold Items:</h3>
              <h3>Total Not Sold Items:</h3>
            </div>
            <div className="text-gray-900 font-semibold">
              <h3>${statistics.totalSaleAmount.toFixed(2)}</h3>
              <h3>{statistics.totalSoldItems}</h3>
              <h3>{statistics.totalNotSoldItems}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
