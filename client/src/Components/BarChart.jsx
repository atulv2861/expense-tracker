import React from "react";
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

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ months, expenses }) => {    
  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Expenses",
        data: expenses,
        backgroundColor: months.map((_, index) => {
          const colors = ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"];
          return colors[index % colors.length];
        }),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Expenses",
      },
    },
    scales: {
      x: {
        type: "category", 
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Expenses",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
