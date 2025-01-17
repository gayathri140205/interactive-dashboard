/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PieChartComponent from "./Charts/PieChartComponent";
import BarChartComponent from "./Charts/BarChartComponent";
import LineChartComponent from "./Charts/LineChartComponent";
import data from "../data/dataset.json";

function Dashboard() {
  const [filteredData, setFilteredData] = useState(data);

  const assetUtilizationData = filteredData.map(item => ({
    category: `Asset Utilization: ${item["TT Number"]}`, 
    count: item["Asset Utilization Per Row"] || 0,  
  }));

  const lorryTypeData = filteredData.map(item => ({
    category: `Lorry Type: ${item["Lorry Type"]}`,  
    count: item["Lorry Type"] || 0,
  }));

  // Debugging 
  console.log("Asset Utilization Data:", assetUtilizationData);
  console.log("Lorry Type Data:", lorryTypeData);

  return (
    <div className="dashboard">
      <h1> Dashboard</h1>
      <div className="charts-container">
    {/* Fleet Efficiency box */}
    <div className="efficiency-box">
      <p>Fleet Efficiency: 64.51%</p>
    </div>
    </div>
      <div className="charts-container">
        {/* PieChart for Asset Efficiency and Lorry Type */}
        <PieChartComponent 
          assetUtilizationData={assetUtilizationData}
          lorryTypeData={lorryTypeData}
        />

        <BarChartComponent 
          routeDeviation={filteredData.map(item => item["Route Deviation"])} 
          stoppageViolation={filteredData.map(item => item["Stoppage Violation"])} 
          speedViolation={filteredData.map(item => item["Speed Violation"])} 
        />

        <LineChartComponent
          ttNumbers={filteredData.map(item => item["TT Number"])}
          actualDistances={filteredData.map(item => item["Actual Trip Distance (KM)"])}
          scheduledDistances={filteredData.map(item => item["Schedule Trip Distance (KM)"])}
        />

        <BarChartComponent
          assetUtilization={filteredData.map(item => item["Asset Utilization Per Row"])}
          timeEfficiency={filteredData.map(item => item["Time Efficiency"])}
        />

        <LineChartComponent
          lorryTypes={filteredData.map(item => item["Lorry Type"])}
        />
      </div>
    </div>
  );
}

export default Dashboard;
