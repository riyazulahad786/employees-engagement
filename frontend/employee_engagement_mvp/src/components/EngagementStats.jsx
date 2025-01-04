import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function EngagementStats() {
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

  // Prepare data for the chart
  const chartData = {
    labels: stats.map((employee) => employee.name),
    datasets: [
      {
        label: "Total Given",
        data: stats.map((employee) => employee.totalGiven),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Total Received",
        data: stats.map((employee) => employee.totalReceived),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
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
        text: "Engagement Stats",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Employee Name",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  return (
    <div className="card mt-4 py-2 shadow-lg">
      <div className="card-body ">
        <h2 className="card-title py-2">Engagement Stats</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default EngagementStats;
