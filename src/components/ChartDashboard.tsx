// components/ChartDashboard.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartDashboard: React.FC = () => {
  // Replace this data with actual chart data fetched from the API
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Cases',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>COVID-19 Cases Over Time</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartDashboard;
