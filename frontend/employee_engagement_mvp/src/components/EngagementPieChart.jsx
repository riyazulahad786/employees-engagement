import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function EngagementPieChart() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:8080/engagement-stats");
        setStats(response.data);
      } catch (err) {
        console.error("Error fetching stats", err);
      }
    };
    fetchStats();
  }, []);

  // Prepare data for the curve chart
  const chartData = {
    labels: stats.map((employee) => employee.name), // You can replace this with actual time data if needed
    datasets: [
      {
        label: "Engagement Stats",
        data: stats.map((employee) => employee.totalGiven + employee.totalReceived),
        fill: false, // Keeps the curve open
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.4, // Controls the curve tension (higher means more curve)
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Engagement Stats Curve",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card mt-4 shadow-lg">
      <div className="card-body">
        <h2 className="card-title py-4">Engagement Stats Curve</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default EngagementPieChart;
