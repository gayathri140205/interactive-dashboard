import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ assetUtilizationData, lorryTypeData }) => {
  const assetUtilizationLabels = assetUtilizationData?.map(item => item.category);
  const assetUtilizationCounts = assetUtilizationData?.map(item => item.count);

  const lorryTypeLabels = lorryTypeData?.map(item => item.category);
  const lorryTypeCounts = lorryTypeData?.map(item => item.count);

  const assetEfficiencyChartData = {
    labels: assetUtilizationLabels,
    datasets: [
      {
        data: assetUtilizationCounts,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#C70039'],
        hoverOffset: 4,
      }
    ]
  };

  const lorryTypeChartData = {
    labels: lorryTypeLabels,
    datasets: [
      {
        data: lorryTypeCounts,
        backgroundColor: ['#FF9F40', '#36A2EB', '#4BC0C0', '#FFCD56', '#F7464A'],
        hoverOffset: 4,
      }
    ]
  };

  return (
    <div className="pie-chart-container">
      <div className="charts-row">
        <div className="pie-chart-box">
          <h2>Asset Efficiency</h2>
          <div style={{ width: '100%', height: '400px' }}>
            <Pie data={assetEfficiencyChartData} />
          </div>
        </div>

        <div className="pie-chart-box">
          <h2>Number of Trips by Lorry Type</h2>
          <div style={{ width: '100%', height: '400px' }}>
            <Pie data={lorryTypeChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
