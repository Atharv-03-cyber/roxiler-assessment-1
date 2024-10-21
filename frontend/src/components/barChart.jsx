import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const BarChart = ({ selectedMonth }) => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Items Sold on the basis of Price Range for a given month",
        backgroundColor: "rgba(108, 229, 232, 0.7)",
        borderColor: "rgb(108, 229, 232)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(108, 229, 10, 0.7)",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await fetch(
          `https://roxiler-assignment-backend.vercel.app/api/barChart?month=${selectedMonth}`
        );
        const data = await response.json();

        const labels = data.map((item) => item.range);
        const counts = data.map((item) => item.count);

        setBarChartData({
          labels,
          datasets: [
            {
              ...barChartData.datasets[0],
              data: counts,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
      }
    };

    fetchBarChartData();
  }, [selectedMonth]);

  return (
    <div className="barchart-container">
      <div className="barchart-title">
        Bar Chart Stats - {selectedMonth}
      </div>
      <div className="chart">
        {barChartData.labels.length > 0 ? (
          <Bar
            data={barChartData}
            height={400} // Adjust height as needed
            width={600}  // Adjust width as needed
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                  labels: {
                    font: {
                      size: 14,
                    },
                    color: "#333",
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Price Range",
                    font: {
                      size: 16,
                      weight: "bold",
                    },
                    color: "#333",
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Number of Items",
                    font: {
                      size: 16,
                      weight: "bold",
                    },
                    color: "#333",
                  },
                  grid: {
                    color: "rgba(200, 200, 200, 0.3)",
                  },
                },
              },
            }}
          />
        ) : (
          <div className="loading">Loading chart data...</div>
        )}
      </div>
    </div>
  );
};

export default BarChart;
