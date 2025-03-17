import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, ArcElement, Filler, Title, Tooltip, Legend);

function DoughNutChart() {
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
      <h1>Doughnut Chart</h1>
      <Doughnut data={salesData} />
    </>
  );
}

export default DoughNutChart;
