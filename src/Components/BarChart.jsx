import React from "react";
import "./BarChart.css";
import {
  Chart as ChartJS,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  BarElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);


function BarChart() {
  const salesData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales Data 2025",
        data: [1100, 200, 700, 300, 600, 900, 100, 800, 500, 400, 1200, 1000],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#75C7B8",
          "#9A66E8",
          "#FFA07A",
          "#C7C5B4",
          "#5367D2",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#75C7B8",
        ],

        hoverOffset: 4,
        fill: true,
      },
    ],
  };

  return (
    <>
      <h1>Bar Chart Implementation</h1>
      <Bar data={salesData}></Bar>
    </>
  );
}

export default BarChart;
