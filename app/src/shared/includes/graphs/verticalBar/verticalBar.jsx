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
import { darkTheme } from "../../../../styles/theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarGraph = ({ importedData }) => {
  const sortedData =
    importedData?.labels &&
    importedData?.labels
      .map((label, index) => ({
        label,
        value: importedData?.data[index],
      }))
      .sort((a, b) => b.value - a.value);

  const sortedLabels = sortedData ? sortedData.map((item) => item.label) : [];
  const sortedValues = sortedData ? sortedData.map((item) => item.value) : [];

  const data = {
    labels: sortedLabels,
    datasets: [
      {
        label: "Quantidade",
        data: sortedValues,
        backgroundColor: darkTheme.colors.secondary_2,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          color: "#fff",
          autoSkip: false,
        },
        grid: {
          display: false,
        },
        afterFit: (axis) => {
          axis.width = 100;
        },
      },
    },
    layout: {
      padding: {
        right: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        color: "#fff",
        align: "end",
        anchor: "end",
        formatter: (value) => `${value} h`,
      },
    },
  };

  const numberOfBars = importedData?.labels ? importedData?.labels.length : 0;
  const barHeight = 35;
  const chartHeight = numberOfBars * barHeight;

  return (
    <div style={{ width: "100%", height: `${chartHeight}px` }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalBarGraph;
