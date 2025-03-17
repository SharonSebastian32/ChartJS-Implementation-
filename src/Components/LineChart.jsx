import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

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
      borderColor: "rgb(255, 77, 0)",
      backgroundColor: "rgba(84, 58, 255, 0.2)",
      pointBackgroundColor: [
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
      fill: true,
    },
    {
      label: "Sales Data 2026",
      data: [100, 200, 500, 300, 400, 700, 600, 900, 500, 600, 800, 1100],
      borderColor: "rgb(0, 0, 255)",
      backgroundColor: "rgba(127, 56, 26, 0.2)",
      pointBackgroundColor: [
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
      fill: true,
    },
  ],
};

function LineChart() {
  return (
    <>
      <h1>Line Chart</h1>
      <Line data={salesData} />
    </>
  );
}

export default LineChart;
