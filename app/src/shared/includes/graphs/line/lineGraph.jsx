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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ importedData }) => {
  const datasets = [
    {
      label: "HH Utilizado",
      data: importedData?.data,
      backgroundColor: ["#2257A8"],
      borderWidth: 1,
    },
  ];
  if (importedData?.data2) {
    datasets.push({
      label: "HH Orçado",
      data: importedData?.data2,
      backgroundColor: ["#95C11F"],
      borderWidth: 1,
    });
  }
  const data = {
    labels: importedData?.labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          color: "#172242",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          padding: 1,
          color: "#172242",
        },
      },
      datalabels: {
        display: true,
        color: "#172242",
        align: "end",
        anchor: "end",
        formatter: (value) => `${value} h`,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
