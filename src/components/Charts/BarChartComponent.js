import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement); // Register PointElement

const BarChartComponent = ({ routeDeviation, stoppageViolation, speedViolation }) => {
  const [loading, setLoading] = useState(true);
  let chartInstance = null;

  useEffect(() => {
    if (routeDeviation && stoppageViolation && speedViolation) {
      setLoading(false);
    }


    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeDeviation, stoppageViolation, speedViolation]);

  if (loading || !routeDeviation || !stoppageViolation || !speedViolation) {
    return <div>Loading...</div>; 
  }

  const data = {
    labels: routeDeviation.map((_, index) => `TT ${index + 1}`), // Using the TT number as labels
    datasets: [
      {
        label: 'Route Deviation',
        data: routeDeviation,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Stoppage Violation',
        data: stoppageViolation,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Speed Violation',
        data: speedViolation,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={data} ref={(chart) => (chartInstance = chart)} /> 
    </div>
  );
};

export default BarChartComponent;
