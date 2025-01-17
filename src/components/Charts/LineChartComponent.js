import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const LineChartComponent = ({ ttNumbers, actualDistances, scheduledDistances }) => {
  const data = {
    labels: ttNumbers,
    datasets: [
      {
        label: 'Actual Trip Distance',
        data: actualDistances,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Scheduled Trip Distance',
        data: scheduledDistances,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChartComponent;
